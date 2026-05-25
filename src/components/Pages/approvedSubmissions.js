import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase.js";

function mapSubmissionToNugget(submissionDoc) {
  const submission = submissionDoc.data();
  const isFact = submission.categoryKey === "facts";

  return {
    id: `submission-${submissionDoc.id}`,
    text: submission.text,
    author: isFact ? null : submission.secondaryText || submission.submitterName || "Community Nugget",
    submitterName: submission.submitterName || submission.submittedByEmail || "Crispy Crew",
    sourceCategoryKey: submission.categoryKey,
    sourceQuoteId: `submission-${submissionDoc.id}`,
    isCommunitySubmission: true,
  };
}

export async function loadApprovedSubmissions(categoryKey) {
  if (!db || categoryKey === "favorites") return [];

  try {
    const approvedQuery = query(
      collection(db, "submissions"),
      where("status", "==", "approved"),
    );
    const snapshot = await getDocs(approvedQuery);

    return snapshot.docs
      .map(mapSubmissionToNugget)
      .filter((submission) => submission.sourceCategoryKey === categoryKey);
  } catch {
    return [];
  }
}

export async function loadAllApprovedSubmissions() {
  if (!db) return [];

  try {
    const approvedQuery = query(
      collection(db, "submissions"),
      where("status", "==", "approved"),
    );
    const snapshot = await getDocs(approvedQuery);

    return snapshot.docs.map(mapSubmissionToNugget);
  } catch {
    return [];
  }
}
