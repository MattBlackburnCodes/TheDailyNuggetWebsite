import { useCallback, useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "../firebase/firebase.js";
import { AuthContext } from "./authContext.js";
import { awardUserXp, XP_REWARDS } from "../utils/xp.js";

function buildUserProfile(user, displayName = "") {
  return {
    uid: user.uid,
    email: user.email,
    displayName: displayName || user.displayName || "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    xp: XP_REWARDS.createAccount,
    streakCount: 0,
    longestStreak: 0,
    lastActiveDate: null,
    lastLoginXpDate: null,
    badges: [],
    rank: "Fresh Nugget",
    unlocks: [],
    favoriteCategories: [],
    savedNuggetsCount: 0,
    savedJokesCount: 0,
    submittedNuggetsCount: 0,
  };
}

function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

async function awardDailyLoginXp(userId, profile) {
  const today = todayKey();

  if (profile?.lastLoginXpDate === today) {
    return profile;
  }

  await updateDoc(doc(db, "users", userId), {
    xp: increment(XP_REWARDS.dailyLogin),
    lastLoginXpDate: today,
    lastActiveDate: today,
    updatedAt: serverTimestamp(),
  });

  return {
    ...profile,
    xp: (Number(profile?.xp) || 0) + XP_REWARDS.dailyLogin,
    lastLoginXpDate: today,
    lastActiveDate: today,
  };
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!auth || !db) {
      setLoading(false);
      return undefined;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (!user) {
        setUserProfile(null);
        setLoading(false);
        return;
      }

      const profileRef = doc(db, "users", user.uid);
      const profileSnapshot = await getDoc(profileRef);

      if (profileSnapshot.exists()) {
        const profile = { id: profileSnapshot.id, ...profileSnapshot.data() };
        const profileWithDailyXp = await awardDailyLoginXp(user.uid, profile);
        setUserProfile(profileWithDailyXp);
      } else {
        const profile = buildUserProfile(user);
        await setDoc(profileRef, profile);
        setUserProfile({ id: user.uid, ...profile, createdAt: null, updatedAt: null });
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function signUp({ email, password, displayName }) {
    if (!auth || !db) throw new Error("Firebase is not configured yet.");

    const credential = await createUserWithEmailAndPassword(auth, email, password);

    if (displayName) {
      await updateProfile(credential.user, { displayName });
    }

    const profile = buildUserProfile(credential.user, displayName);
    await setDoc(doc(db, "users", credential.user.uid), profile, { merge: true });

    return credential.user;
  }

  async function logIn({ email, password }) {
    if (!auth) throw new Error("Firebase is not configured yet.");
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user;
  }

  async function logOut() {
    if (!auth) return;
    await signOut(auth);
  }

  async function resetPassword(email) {
    if (!auth) throw new Error("Firebase is not configured yet.");
    await sendPasswordResetEmail(auth, email);
  }

  const awardXp = useCallback(async (amount, extraUpdates = {}) => {
    if (!currentUser) return;

    await awardUserXp(currentUser.uid, amount, extraUpdates);
    setUserProfile((currentProfile) => currentProfile ? ({
      ...currentProfile,
      xp: (Number(currentProfile.xp) || 0) + amount,
    }) : currentProfile);
  }, [currentUser]);

  const value = useMemo(
    () => ({
      currentUser,
      userProfile,
      loading,
      isFirebaseConfigured,
      signUp,
      logIn,
      logOut,
      resetPassword,
      awardXp,
    }),
    [currentUser, userProfile, loading, awardXp],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
