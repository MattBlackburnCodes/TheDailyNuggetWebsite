import { addDoc, collection, increment, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase.js";
import { useAuth } from "../context/useAuth.js";
import PageMeta from "./PageMeta.jsx";
import { XP_REWARDS } from "../utils/xp.js";

const submissionCategories = [
  { key: "quotes", label: "Random Quotes", helper: "Share a general quote or original nugget.", secondaryLabel: "Author", secondaryPlaceholder: "Author name or The Daily Nugget" },
  { key: "motivation", label: "Motivation", helper: "Submit a motivational quote or short encouragement.", secondaryLabel: "Author", secondaryPlaceholder: "Author name" },
  { key: "affirmations", label: "Affirmations", helper: "Submit a first-person affirmation.", secondaryLabel: "Author", secondaryPlaceholder: "Optional" },
  { key: "jokes", label: "Jokes", helper: "Submit a setup and punchline.", secondaryLabel: "Punchline", secondaryPlaceholder: "Because..." },
  { key: "facts", label: "Fun Facts", helper: "Submit one interesting fact.", secondaryLabel: "Source or note", secondaryPlaceholder: "Optional source or context" },
  { key: "calm", label: "Calm", helper: "Submit a calming quote or reminder.", secondaryLabel: "Author", secondaryPlaceholder: "Author name" },
  { key: "presidents", label: "Presidents", helper: "Submit a quote from a president.", secondaryLabel: "President", secondaryPlaceholder: "President name" },
  { key: "love", label: "Love", helper: "Submit a quote about love, kindness, friendship, or care.", secondaryLabel: "Author", secondaryPlaceholder: "Author name" },
  { key: "chick-e-nugget-quotes", label: "Chick E. Nugget Quotes", helper: "Submit a playful original Chick E. Nugget-style line.", secondaryLabel: "Author", secondaryPlaceholder: "Your name or Chick E. Nugget" },
  { key: "entrepreneurs", label: "Entrepreneurs", helper: "Submit a quote for builders, creators, and founders.", secondaryLabel: "Author", secondaryPlaceholder: "Author name" },
  { key: "wisdom", label: "Wisdom", helper: "Submit a quote about perspective, judgment, or patience.", secondaryLabel: "Author", secondaryPlaceholder: "Author name" },
];

export default function SubmitNugget() {
  const { currentUser, userProfile, isFirebaseConfigured, awardXp } = useAuth();
  const [categoryKey, setCategoryKey] = useState(submissionCategories[0].key);
  const [text, setText] = useState("");
  const [secondaryText, setSecondaryText] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selectedCategory = submissionCategories.find((category) => category.key === categoryKey);
  const mainLabel = categoryKey === "jokes" ? "Joke setup" : categoryKey === "facts" ? "Fun fact" : "Quote or nugget";
  const submitterName = userProfile?.displayName || currentUser?.displayName || currentUser?.email || "";

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setError("");

    if (!currentUser) {
      setError("Please log in before submitting a nugget.");
      return;
    }

    if (!text.trim()) {
      setError("Please add the quote, joke setup, or fact before submitting.");
      return;
    }

    if (categoryKey === "jokes" && !secondaryText.trim()) {
      setError("Please add a punchline for the joke.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "submissions"), {
        categoryKey,
        categoryTitle: selectedCategory.label,
        text: text.trim(),
        secondaryText: secondaryText.trim(),
        submitterName,
        submittedByUid: currentUser.uid,
        submittedByEmail: currentUser.email,
        status: "pending",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      try {
        await awardXp(XP_REWARDS.submitNugget, {
          submittedNuggetsCount: increment(1),
        });
        setStatus("Submitted for review. +10 XP");
      } catch {
        setStatus("Submitted for review. Thanks for adding a nugget to the tray.");
      }

      setText("");
      setSecondaryText("");
    } catch {
      setError("Something went wrong while submitting. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="submission-page bg-blackburn-gray">
      <PageMeta
        title="Submit a Nugget"
        description="Submit a quote, joke, affirmation, fun fact, or Chick E. Nugget original for review."
        path="/submit"
      />

      <div className="container submission-page-content text-gold">
        <div className="submission-panel">
          <p className="challenge-kicker">Community Nuggets</p>
          <h1>Submit your own nugget</h1>
          <p className="account-muted">
            Send in a quote, joke, affirmation, fun fact, or original Chick E. Nugget-style line.
            Submissions are reviewed before they appear on the site.
          </p>

          {!isFirebaseConfigured && (
            <p className="account-error">Firebase needs to be configured before submissions can work.</p>
          )}

          {!currentUser && (
            <p className="account-muted">
              You need an account to submit. <Link to="/account">Log in or sign up</Link>.
            </p>
          )}

          <form className="submission-form" onSubmit={handleSubmit}>
            <label>
              Category
              <select value={categoryKey} onChange={(event) => setCategoryKey(event.target.value)}>
                {submissionCategories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.label}
                  </option>
                ))}
              </select>
            </label>

            <p className="submission-helper">{selectedCategory.helper}</p>

            <label>
              {mainLabel}
              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder={categoryKey === "jokes" ? "Why did..." : "Write the nugget here"}
                required
              />
            </label>

            <label>
              {selectedCategory.secondaryLabel}
              <input
                type="text"
                value={secondaryText}
                onChange={(event) => setSecondaryText(event.target.value)}
                placeholder={selectedCategory.secondaryPlaceholder}
                required={categoryKey === "jokes"}
              />
            </label>

            {currentUser && (
              <div className="submission-helper">
                Submitting as {submitterName}
              </div>
            )}

            {status && <p className="account-success">{status}</p>}
            {error && <p className="account-error">{error}</p>}

            <button className="btn btn-blackburn-gold" type="submit" disabled={!currentUser || submitting}>
              {submitting ? "Submitting..." : "Submit for approval"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
