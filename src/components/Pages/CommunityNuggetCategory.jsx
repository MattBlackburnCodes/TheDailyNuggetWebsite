import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageMeta from "../PageMeta.jsx";
import QuoteActions from "./QuoteActions.jsx";
import { loadApprovedSubmissions } from "./approvedSubmissions.js";

const categoryLabels = {
  quotes: "Random Quotes",
  motivation: "Motivation",
  affirmations: "Affirmations",
  jokes: "Jokes",
  facts: "Fun Facts",
  calm: "Calm",
  presidents: "Presidents",
  love: "Love",
  "chick-e-nugget-quotes": "Chick E. Nugget Quotes",
  entrepreneurs: "Entrepreneurs",
  wisdom: "Wisdom",
};

export default function CommunityNuggetCategory() {
  const { communityCategoryKey } = useParams();
  const [nuggets, setNuggets] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryTitle = categoryLabels[communityCategoryKey] || communityCategoryKey;

  useEffect(() => {
    let cancelled = false;

    async function loadCategoryNuggets() {
      setLoading(true);
      const approvedNuggets = await loadApprovedSubmissions(communityCategoryKey);

      if (!cancelled) {
        setNuggets(approvedNuggets);
        setLoading(false);
      }
    }

    loadCategoryNuggets();

    return () => {
      cancelled = true;
    };
  }, [communityCategoryKey]);

  return (
    <main className="bg-blackburn-gray min-vh-100">
      <PageMeta
        title={`Community ${categoryTitle}`}
        description={`Browse approved community-submitted nuggets in ${categoryTitle}.`}
        path={`/explore/community-nuggets/${communityCategoryKey}`}
      />

      <div className="container category-page-content text-gold">
        <Link className="quote-back-link" to="/explore/community-nuggets">
          Back to Community Nuggets
        </Link>

        <div className="category-page-header">
          <h2>Community {categoryTitle}</h2>
          <p className="text-white">
            Approved nuggets from the Crispy Crew submitted under {categoryTitle}.
          </p>
        </div>

        <div className="category-page-intro">
          <p className="text-white">
            These nuggets were submitted by Daily Nugget users and approved before appearing on the site.
            Community content helps make each category feel more alive, personal, and useful.
          </p>
        </div>

        {loading && <p className="text-white">Loading community nuggets...</p>}

        {!loading && nuggets.length === 0 && (
          <div className="category-empty-state">
            <p className="text-white mb-2">No approved community nuggets in this category yet.</p>
            <Link to="/submit">Submit one for review.</Link>
          </div>
        )}

        {!loading && nuggets.length > 0 && (
          <div className="row gy-3">
            {nuggets.map((nugget) => (
              <div className="col-12 col-md-6 col-xl-4" key={nugget.id}>
                <div className="category-quote-card p-3 shadow-inset bg-blackburn-dark-yellow rounded-4">
                  <Link
                    className="category-quote-link"
                    to={`/explore/${communityCategoryKey}/${nugget.sourceQuoteId}`}
                    aria-label={`Open community nugget for ${nugget.text}`}
                  >
                    <span className="community-nugget-badge">
                      Community Nugget{nugget.submitterName ? ` by ${nugget.submitterName}` : ""}
                    </span>
                    <p className="category-quote-text text-white mb-2">{nugget.text}</p>
                    {nugget.author && (
                      <small className="category-quote-author text-gold">- {nugget.author}</small>
                    )}
                  </Link>

                  <QuoteActions
                    categoryKey={communityCategoryKey}
                    quote={nugget}
                    quoteId={nugget.sourceQuoteId}
                    compact
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
