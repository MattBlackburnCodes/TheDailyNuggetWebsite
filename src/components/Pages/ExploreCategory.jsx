import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/*
Make sure these keys EXACTLY match your route links:
<Link to="/explore/quotes" />
<Link to="/explore/facts" />
*/

const ENDPOINTS = {
    motivation: "https://api-motivation.vercel.app/api/mood/",
    quotes: "https://quote-api-xi.vercel.app/api/quotes", // returns { randomQuotes: [...] }
    facts: "https://fun-facts-quote-api.vercel.app/api/funFacts", // returns [ ... ]
    affirmations: "https://affirmation-quote-api.vercel.app/api/affirmations",
    jokes: "https://jokes-api-steel.vercel.app/api/jokes",
    calm: "https://api-motivation.vercel.app/api/mood",
};

/* 
Normalize everything into:
{ id, text, author }
So the UI never has to care about API differences
*/
function normalize(categoryKey, data) {
  switch (categoryKey) {
    case "quotes": {
      const list = data.randomQuotes ?? [];
      return list.map((x) => ({
        id: x.id,
        text: x.q,
        author: x.a,
      }));
    }

    case "facts": {
      return (Array.isArray(data) ? data : []).map((x) => ({
        id: x.id,
        text: x.fact,
        author: null,
      }));
    }

    case "motivation": {
        const list = data.motivate ?? [];
        return list.map((x) => ({
            id: x.id,
            text: x.q,
            author: null,
      }));
    }

    case "calm": {
        const list = data.calm ?? [];
        return list.map((x) => ({
            id: x.id,
            text: x.q,
            author: null,
      }));
    }

    case "affirmations": {
      return (Array.isArray(data) ? data : []).map((x) => ({
        id: x.id,
        text: x.affirmation,
        author: null,
      }));
    }

    case "jokes": {
      return (Array.isArray(data) ? data : []).map((x) => ({
            id: x.id,
            text: x.j,
            author: x.p,
      }));
    }

    default:
      return [];
  }
}

export default function ExploreCategory() {
  const { categoryKey } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = ENDPOINTS[categoryKey];

    if (!url) {
      setError("Unknown category.");
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network error");

        const data = await response.json();
        const normalized = normalize(categoryKey, data);

        if (!cancelled) setItems(normalized);
      } catch (err) {
        if (!cancelled) setError("Failed to load category.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, [categoryKey]);

  return (
    <div className="bg-blackburn-gray min-vh-100">
      <div className="container pt-4 pb-5 text-gold">

        {/* Header */}
        <h2 className="mb-4 pt-5 text-capitalize">
          {categoryKey}
        </h2>

        {/* Loading */}
        {loading && <p className="text-white">Loading...</p>}

        {/* Error */}
        {error && <p className="text-danger">{error}</p>}

        {/* Grid */}
        {!loading && !error && (
          <div className="row gy-3">
            {items.map((item, index) => (
              <div
                key={item.id ?? `${categoryKey}-${index}`}
                className="col-12 col-md-6 col-xl-4"
              >
                <div className="p-3 shadow-inset bg-blackburn-dark-yellow rounded-4">
                  <p className="text-white mb-2">{item.text}</p>
                  {item.author && (
                    <small className="text-gold">— {item.author}</small>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}