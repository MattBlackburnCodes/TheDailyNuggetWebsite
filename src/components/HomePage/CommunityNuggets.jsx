import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { loadAllApprovedSubmissions } from "../Pages/approvedSubmissions.js";
import PageMeta from "../PageMeta.jsx";

const communityCategoryMeta = {
  quotes: {
    icon: "🎲",
    title: "Random Quotes",
    description: "Community-submitted quote nuggets.",
  },
  motivation: {
    icon: "💪",
    title: "Motivation",
    description: "Encouragement from the Crispy Crew.",
  },
  affirmations: {
    icon: "🥰",
    title: "Affirmations",
    description: "Submitted affirmations and self-talk.",
  },
  jokes: {
    icon: "😂",
    title: "Jokes",
    description: "Community jokes and punchlines.",
  },
  facts: {
    icon: "🤓",
    title: "Fun Facts",
    description: "Interesting facts from users.",
  },
  calm: {
    icon: "🧘",
    title: "Calm",
    description: "Gentle reminders from the community.",
  },
  presidents: {
    icon: "🇺🇸",
    title: "Presidents",
    description: "Submitted presidential quotes.",
  },
  love: {
    icon: "❤️",
    title: "Love",
    description: "Community nuggets about care and connection.",
  },
  "chick-e-nugget-quotes": {
    icon: "🍗",
    title: "Chick E. Nugget Quotes",
    description: "Mascot-inspired community originals.",
  },
  entrepreneurs: {
    icon: "🚀",
    title: "Entrepreneurs",
    description: "Builder-minded community nuggets.",
  },
  wisdom: {
    icon: "💡",
    title: "Wisdom",
    description: "Perspective from the Crispy Crew.",
  },
};

function groupByCategory(submissions) {
  return submissions.reduce((groups, submission) => {
    const categoryKey = submission.sourceCategoryKey || "quotes";
    return {
      ...groups,
      [categoryKey]: [...(groups[categoryKey] || []), submission],
    };
  }, {});
}

export default function CommunityNuggets() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadCommunityNuggets() {
      setLoading(true);
      const approvedSubmissions = await loadAllApprovedSubmissions();

      if (!cancelled) {
        setSubmissions(approvedSubmissions);
        setLoading(false);
      }
    }

    loadCommunityNuggets();

    return () => {
      cancelled = true;
    };
  }, []);

  const groupedSubmissions = useMemo(() => groupByCategory(submissions), [submissions]);
  const categoryGroups = Object.entries(groupedSubmissions);

  return (
    <main className="bg-blackburn-gray min-vh-100">
      <PageMeta
        title="Community Nuggets"
        description="Browse approved community-submitted nuggets from The Daily Nugget Crispy Crew, organized by category."
        path="/explore/community-nuggets"
      />
      <div className="container community-nuggets-section text-gold">
        <div className="community-nuggets-header">
          <div>
            <h2>Community Nuggets</h2>
            <p className="text-white mb-0">
              Approved nuggets from the Crispy Crew, sorted by the category they were submitted to.
            </p>
          </div>
          <Link className="btn btn-blackburn-gold" to="/submit">
            Submit
          </Link>
        </div>

        {loading && <p className="text-white">Loading community nuggets...</p>}

        {!loading && categoryGroups.length === 0 && (
          <div className="community-nuggets-empty">
            <p className="mb-2">No approved community nuggets yet.</p>
            <Link to="/submit">Be the first to submit one.</Link>
          </div>
        )}

        {!loading && categoryGroups.length > 0 && (
          <div className="community-nuggets-grid">
            {categoryGroups.map(([categoryKey, nuggets]) => (
              <article className="community-category-card p-3 shadow-inset rounded-4 h-100" key={categoryKey}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="fs-1 bg-blackburn-dark-yellow rounded-2">
                    {communityCategoryMeta[categoryKey]?.icon || "🤝"}
                  </span>
                  <div>
                    <h3 className="mb-1">{communityCategoryMeta[categoryKey]?.title || categoryKey}</h3>
                    <p className="mb-1">{communityCategoryMeta[categoryKey]?.description || "Approved community nuggets."}</p>
                    <small>{nuggets.length} approved nugget{nuggets.length === 1 ? "" : "s"}</small>
                  </div>
                </div>

                <Link to={`/explore/community-nuggets/${categoryKey}`} className="btn btn-blackburn-gold">
                  Explore
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
