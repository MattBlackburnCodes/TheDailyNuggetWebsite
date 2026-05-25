import { doc, increment, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

export const XP_REWARDS = {
  createAccount: 25,
  completeDailyChallenge: 50,
  perfectDailyChallenge: 25,
  submitNugget: 10,
  approvedSubmission: 50,
  favoriteNugget: 5,
  dailyLogin: 10,
};

export async function awardUserXp(userId, amount, extraUpdates = {}) {
  if (!db || !userId || !amount) return;

  await updateDoc(doc(db, "users", userId), {
    xp: increment(amount),
    updatedAt: serverTimestamp(),
    ...extraUpdates,
  });
}
