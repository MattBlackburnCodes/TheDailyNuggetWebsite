import { Link, useSearchParams } from "react-router-dom";
import PageMeta from "../PageMeta.jsx";
import QuoteActions from "./QuoteActions.jsx";
import { LOCAL_CATEGORIES } from "./ExploreCategory.jsx";

function buildSearchIndex() {
  return Object.entries(LOCAL_CATEGORIES)
    .filter(([categoryKey]) => categoryKey !== "favorites")
    .flatMap(([categoryKey, category]) =>
      category.items.map((item, index) => {
        const quoteId = item.sourceQuoteId ?? item.id ?? index;

        return {
          id: `${categoryKey}-${quoteId}`,
          categoryKey,
          categoryTitle: category.title,
          quoteId,
          text: item.text,
          author: item.author || null,
          route: `/explore/${categoryKey}/${quoteId}`,
          searchableText: `${category.title} ${item.text} ${item.author || ""}`.toLowerCase(),
        };
      }),
    );
}

function getSearchResults(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return buildSearchIndex()
    .map((item) => {
      const score = terms.reduce((total, term) => {
        if (item.searchableText.includes(term)) return total + 1;
        return total;
      }, 0);

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.categoryTitle.localeCompare(b.categoryTitle));
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = getSearchResults(query);

  return (
    <main className="search-page bg-blackburn-gray min-vh-100">
      <PageMeta
        title={query ? `Search results for ${query}` : "Search"}
        description="Search Daily Nugget quotes, jokes, affirmations, fun facts, wisdom, Chick E. Nugget originals, and more."
        path="/search"
      />

      <div className="container search-page-content text-gold">
        <section className="search-hero">
          <p className="challenge-kicker">Search</p>
          <h1>{query ? `Results for "${query}"` : "Search The Daily Nugget"}</h1>
          <p>
            Find nuggets by keyword, theme, category, or author. Search currently covers the site's
            local quote categories and will be easy to expand when the APIs are reorganized.
          </p>
        </section>

        {!query && (
          <div className="search-empty-state">
            <p>Try searching for words like courage, love, habit, calm, leadership, or progress.</p>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="search-empty-state">
            <p>No nuggets found for that search yet.</p>
            <Link to="/#categories">Browse categories instead.</Link>
          </div>
        )}

        {results.length > 0 && (
          <>
            <p className="search-count">{results.length} result{results.length === 1 ? "" : "s"} found</p>
            <div className="row gy-3">
              {results.map((item) => (
                <div className="col-12 col-md-6 col-xl-4" key={item.id}>
                  <div className="category-quote-card p-3 shadow-inset bg-blackburn-dark-yellow rounded-4">
                    <Link
                      className="category-quote-link"
                      to={item.route}
                      aria-label={`Open quote page for ${item.text}`}
                    >
                      <span className="search-result-category">{item.categoryTitle}</span>
                      <p className="category-quote-text text-white mb-2">{item.text}</p>
                      {item.author && (
                        <small className="category-quote-author text-gold">- {item.author}</small>
                      )}
                    </Link>

                    <QuoteActions
                      categoryKey={item.categoryKey}
                      quote={item}
                      quoteId={item.quoteId}
                      compact
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
