import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageMeta from "../PageMeta.jsx";
import QuoteActions from "./QuoteActions.jsx";
import { loadApprovedSubmissions } from "./approvedSubmissions.js";
import { CATEGORY_CONTENT, ENDPOINTS, LOCAL_CATEGORIES, normalize } from "./ExploreCategory.jsx";

function findQuote(items, quoteId) {
  return items.find((item, index) => String(item.id ?? index) === String(quoteId));
}

export default function QuoteDetail() {
  const { categoryKey, quoteId } = useParams();
  const localCategory = LOCAL_CATEGORIES[categoryKey];

  const [quote, setQuote] = useState(() => findQuote(localCategory?.items || [], quoteId));
  const [loading, setLoading] = useState(!localCategory);
  const [error, setError] = useState("");

  useEffect(() => {
    const local = LOCAL_CATEGORIES[categoryKey];

    if (local) {
      let cancelled = false;

      async function loadLocalQuote() {
        setLoading(true);
        setError("");

        try {
          const approvedSubmissions = await loadApprovedSubmissions(categoryKey);
          const allItems = [...local.items, ...approvedSubmissions];
          if (!cancelled) setQuote(findQuote(allItems, quoteId));
        } catch {
          if (!cancelled) setQuote(findQuote(local.items, quoteId));
        } finally {
          if (!cancelled) setLoading(false);
        }
      }

      loadLocalQuote();

      return () => {
        cancelled = true;
      };
    }

    const url = ENDPOINTS[categoryKey];

    if (!url) {
      setError("Quote category not found.");
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadQuote() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network error");

        const data = await response.json();
        const items = normalize(categoryKey, data);
        const approvedSubmissions = await loadApprovedSubmissions(categoryKey);
        const selectedQuote = findQuote([...items, ...approvedSubmissions], quoteId);

        if (!cancelled) setQuote(selectedQuote);
      } catch {
        if (!cancelled) setError("This quote could not be loaded right now.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadQuote();

    return () => {
      cancelled = true;
    };
  }, [categoryKey, quoteId]);

  const pageTitle = localCategory?.title || categoryKey;
  const categoryContent = CATEGORY_CONTENT[categoryKey] || CATEGORY_CONTENT.quotes;

  return (
    <div className="bg-blackburn-gray min-vh-100">
      <PageMeta
        title={quote ? `${quote.text} | The Daily Nugget` : `${pageTitle} Quote`}
        description={quote?.author ? `${quote.text} - ${quote.author}` : quote?.text || "Open a Daily Nugget quote page."}
        path={`/explore/${categoryKey}/${quoteId}`}
      />

      <div className="container quote-detail-page text-gold">
        <Link className="quote-back-link" to={`/explore/${categoryKey}`}>
          Back to {pageTitle}
        </Link>

        {loading && <p className="text-white">Loading quote...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && !quote && (
          <div className="quote-detail-card">
            <h1>Quote not found</h1>
            <p className="text-white mb-0">This nugget may have moved or refreshed. Try the full category page.</p>
          </div>
        )}

        {!loading && !error && quote && (
          <>
            <div className="quote-detail-card">
              <p className="quote-detail-label">{pageTitle}</p>
              {quote.isCommunitySubmission && (
                <p className="community-nugget-badge community-nugget-badge-detail">
                  Community Nugget{quote.submitterName ? ` by ${quote.submitterName}` : ""}
                </p>
              )}
              <blockquote>{quote.text}</blockquote>
              {quote.author && <p className="quote-detail-author">- {quote.author}</p>}
              <QuoteActions categoryKey={categoryKey} quote={quote} quoteId={quoteId} />
            </div>

            <div className="quote-detail-extra">
              <h2>Think on this nugget</h2>
              <p>
                What is one small action, message, or mindset shift this quote points you toward today?
                Save it, share it, or copy it somewhere you will see it again.
              </p>
            </div>

            <div className="quote-detail-extra">
              <h2>About this category</h2>
              <p>{categoryContent.intro[0]}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
