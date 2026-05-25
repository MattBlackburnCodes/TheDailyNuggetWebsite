import { collection, doc, getDocs, limit, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebase/firebase.js";
import { useAuth } from "../context/useAuth.js";
import { awardUserXp, XP_REWARDS } from "../utils/xp.js";

const ADMIN_EMAIL = "jointhecrispycrew@gmail.com";

export default function AdminSubmissions() {
  const { currentUser } = useAuth();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const isAdmin = currentUser?.email?.toLowerCase() === ADMIN_EMAIL;

  const loadSubmissions = useCallback(async () => {
    if (!isAdmin || !db) return;

    setLoading(true);
    setStatus("");

    try {
      const submissionsQuery = query(
        collection(db, "submissions"),
        orderBy("createdAt", "desc"),
        limit(50),
      );
      const snapshot = await getDocs(submissionsQuery);
      setSubmissions(snapshot.docs.map((submissionDoc) => ({
        id: submissionDoc.id,
        ...submissionDoc.data(),
      })));
    } catch {
      setStatus("Could not load submissions.");
    } finally {
      setLoading(false);
    }
  }, [isAdmin]);

  async function reviewSubmission(submissionId, reviewStatus) {
    if (!isAdmin) return;
    const submission = submissions.find((item) => item.id === submissionId);
    const shouldAwardApprovalXp = reviewStatus === "approved"
      && submission?.submittedByUid
      && !submission?.approvalXpAwarded;

    await updateDoc(doc(db, "submissions", submissionId), {
      status: reviewStatus,
      approvalXpAwarded: shouldAwardApprovalXp ? true : submission?.approvalXpAwarded || false,
      reviewedAt: serverTimestamp(),
      reviewedBy: currentUser.email,
      updatedAt: serverTimestamp(),
    });

    if (shouldAwardApprovalXp) {
      await awardUserXp(submission.submittedByUid, XP_REWARDS.approvedSubmission);
    }

    setSubmissions((currentSubmissions) => currentSubmissions.map((submission) => (
      submission.id === submissionId
        ? { ...submission, status: reviewStatus, approvalXpAwarded: shouldAwardApprovalXp || submission.approvalXpAwarded }
        : submission
    )));
  }

  useEffect(() => {
    loadSubmissions();
  }, [loadSubmissions]);

  if (!isAdmin) return null;

  const pendingSubmissions = submissions.filter((submission) => submission.status === "pending");
  const reviewedSubmissions = submissions.filter((submission) => submission.status !== "pending");

  return (
    <div className="admin-submissions-card">
      <div className="account-section-heading">
        <div>
          <p className="challenge-kicker">Admin Review</p>
          <h2>Community submissions</h2>
        </div>
        <button type="button" onClick={loadSubmissions} disabled={loading}>
          Refresh
        </button>
      </div>

      {status && <p className="account-error">{status}</p>}
      {loading && <p className="account-muted">Loading submissions...</p>}

      {!loading && pendingSubmissions.length === 0 && (
        <p className="account-muted">No pending submissions right now.</p>
      )}

      <div className="admin-submissions-list">
        {pendingSubmissions.map((submission) => (
          <article className="admin-submission-item" key={submission.id}>
            <div>
              <span>{submission.categoryTitle}</span>
              <h3>{submission.text}</h3>
              {submission.secondaryText && <p>{submission.secondaryText}</p>}
              <small>
                Submitted by {submission.submitterName || submission.submittedByEmail || "Unknown"}
              </small>
            </div>
            <div className="admin-submission-actions">
              <button type="button" onClick={() => reviewSubmission(submission.id, "approved")}>
                Approve
              </button>
              <button type="button" onClick={() => reviewSubmission(submission.id, "rejected")}>
                Reject
              </button>
            </div>
          </article>
        ))}
      </div>

      {reviewedSubmissions.length > 0 && (
        <details className="admin-reviewed-submissions">
          <summary>Recently reviewed ({reviewedSubmissions.length})</summary>
          {reviewedSubmissions.map((submission) => (
            <p key={submission.id}>
              <strong>{submission.status}</strong> - {submission.text}
            </p>
          ))}
        </details>
      )}
    </div>
  );
}
