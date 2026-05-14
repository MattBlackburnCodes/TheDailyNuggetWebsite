import { useState } from "react";
import PageMeta from "./PageMeta.jsx";
import { useAuth } from "../context/useAuth.js";

function getFriendlyAuthError(error) {
  if (!error?.code) return error?.message || "Something went wrong. Please try again.";

  const messages = {
    "auth/email-already-in-use": "That email is already connected to an account.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/invalid-credential": "The email or password is not correct.",
    "auth/weak-password": "Please use a password with at least 6 characters.",
    "auth/missing-password": "Please enter your password.",
  };

  return messages[error.code] || "Something went wrong. Please try again.";
}

export default function Account() {
  const {
    currentUser,
    userProfile,
    loading,
    isFirebaseConfigured,
    signUp,
    logIn,
    logOut,
    resetPassword,
  } = useAuth();

  const [mode, setMode] = useState("signup");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setError("");
    setSubmitting(true);

    try {
      if (mode === "signup") {
        await signUp({ email, password, displayName });
        setStatus("Account created. Your Daily Nugget profile is ready.");
      } else {
        await logIn({ email, password });
        setStatus("Welcome back.");
      }

      setPassword("");
    } catch (authError) {
      setError(getFriendlyAuthError(authError));
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    setStatus("");
    setError("");
    await logOut();
  }

  async function handlePasswordReset() {
    setStatus("");
    setError("");

    if (!email) {
      setError("Enter your email address first, then click forgot password.");
      return;
    }

    setSubmitting(true);

    try {
      await resetPassword(email);
      setStatus("Password reset email sent. Check your inbox.");
    } catch (resetError) {
      setError(getFriendlyAuthError(resetError));
    } finally {
      setSubmitting(false);
    }
  }

  if (!isFirebaseConfigured) {
    return (
      <main className="account-page bg-blackburn-gray">
        <PageMeta
          title="Account"
          description="Create or manage your Daily Nugget account."
          path="/account"
        />
        <div className="container account-page-content text-gold">
          <div className="account-panel">
            <h1>Account setup needed</h1>
            <p>
              Firebase is installed, but the app needs your Firebase web app values in environment
              variables before login and signup can work.
            </p>
            <p className="mb-0">
              Add the `VITE_FIREBASE_*` values from `.env.example` to your local `.env` file and to
              your Vercel project environment variables.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="account-page bg-blackburn-gray">
        <div className="container account-page-content text-gold">
          <p className="text-white">Loading account...</p>
        </div>
      </main>
    );
  }

  if (currentUser) {
    return (
      <main className="account-page bg-blackburn-gray">
        <PageMeta
          title="My Account"
          description="View your Daily Nugget account profile."
          path="/account"
        />
        <div className="container account-page-content text-gold">
          <div className="account-panel">
            <p className="challenge-kicker">My Daily Nugget</p>
            <h1>Welcome{userProfile?.displayName ? `, ${userProfile.displayName}` : ""}</h1>
            <p className="account-muted">
              Your profile document is connected to Firebase and ready for favorites, streaks, XP,
              badges, ranks, and nugget submissions.
            </p>

            <div className="account-stats-grid">
              <div>
                <span>XP</span>
                <strong>{userProfile?.xp ?? 0}</strong>
              </div>
              <div>
                <span>Streak</span>
                <strong>{userProfile?.streakCount ?? 0}</strong>
              </div>
              <div>
                <span>Rank</span>
                <strong>{userProfile?.rank || "Fresh Nugget"}</strong>
              </div>
              <div>
                <span>Badges</span>
                <strong>{userProfile?.badges?.length ?? 0}</strong>
              </div>
            </div>

            <div className="account-profile-card">
              <p><strong>Email:</strong> {currentUser.email}</p>
              {/* <p><strong>User ID:</strong> {currentUser.uid}</p> */}
              <p className="mb-0"><strong>Saved nuggets:</strong> {userProfile?.savedNuggetsCount ?? 0}</p>
            </div>

            {status && <p className="account-success">{status}</p>}
            {error && <p className="account-error">{error}</p>}

            <button className="btn btn-blackburn-gold" type="button" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="account-page bg-blackburn-gray">
      <PageMeta
        title="Account"
        description="Create or log in to your Daily Nugget account."
        path="/account"
      />
      <div className="container account-page-content text-gold">
        <div className="account-layout">
          <div className="account-panel">
            <p className="challenge-kicker">Daily Nugget Account</p>
            <h1>{mode === "signup" ? "Create your account" : "Log in"}</h1>
            <p className="account-muted">
              Save nuggets, track progress, and prepare for streaks, XP, badges, ranks, unlocks, and
              community submissions.
            </p>

            <form className="account-form" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <label>
                  Display name
                  <input
                    type="text"
                    value={displayName}
                    onChange={(event) => setDisplayName(event.target.value)}
                    placeholder="Chick E. Fan"
                  />
                </label>
              )}

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="At least 8 characters"
                  required
                />
              </label>

              {status && <p className="account-success">{status}</p>}
              {error && <p className="account-error">{error}</p>}

              <button className="btn btn-blackburn-gold" type="submit" disabled={submitting}>
                {submitting ? "Working..." : mode === "signup" ? "Create account" : "Log in"}
              </button>
            </form>

            {mode === "login" && (
              <button
                className="account-mode-toggle"
                type="button"
                onClick={handlePasswordReset}
                disabled={submitting}
              >
                Forgot password?
              </button>
            )}

            <button
              className="account-mode-toggle"
              type="button"
              onClick={() => {
                setMode(mode === "signup" ? "login" : "signup");
                setError("");
                setStatus("");
              }}
            >
              {mode === "signup"
                ? "Already have an account? Log in"
                : "Need an account? Sign up"}
            </button>
          </div>

          <div className="account-benefits">
            <h2>Profile foundation</h2>
            <ul>
              <li>Firebase email and password authentication</li>
              <li>Firestore user profile document on signup</li>
              <li>Starter fields for streaks, XP, badges, ranks, and unlocks</li>
              <li>Ready for favorites and submitted nuggets next</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
