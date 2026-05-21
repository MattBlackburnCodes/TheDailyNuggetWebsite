import { useEffect, useMemo, useState } from "react";

const FAVORITES_STORAGE_KEY = "dailyNuggetFavorites";

function getFavoriteKey(categoryKey, quoteId) {
  return `${categoryKey}:${quoteId}`;
}

function getQuoteText(quote) {
  return quote.author ? `"${quote.text}" - ${quote.author}` : quote.text;
}

function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function writeFavorites(favorites) {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}

export default function QuoteActions({ categoryKey, quote, quoteId, compact = false }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [status, setStatus] = useState("");
  const favoriteKey = useMemo(() => getFavoriteKey(categoryKey, quoteId), [categoryKey, quoteId]);
  const shareUrl = `${window.location.origin}/explore/${categoryKey}/${quoteId}`;
  const shareText = `Daily Nugget: ${getQuoteText(quote)}`;

  useEffect(() => {
    setIsFavorite(Boolean(readFavorites()[favoriteKey]));
  }, [favoriteKey]);

  async function copyQuote() {
    try {
      await navigator.clipboard.writeText(getQuoteText(quote));
      setStatus("Copied");
    } catch {
      setStatus("Copy failed");
    }
  }

  function toggleFavorite() {
    const favorites = readFavorites();

    if (favorites[favoriteKey]) {
      delete favorites[favoriteKey];
      setIsFavorite(false);
      setStatus("Removed from favorites");
    } else {
      favorites[favoriteKey] = {
        categoryKey,
        quoteId,
        text: quote.text,
        author: quote.author || null,
        savedAt: new Date().toISOString(),
      };
      setIsFavorite(true);
      setStatus("Saved to favorites");
    }

    writeFavorites(favorites);
  }

  async function shareQuote() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "The Daily Nugget",
          text: shareText,
          url: shareUrl,
        });
        return;
      }

      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setStatus("Share link copied");
    } catch {
      setStatus("Share cancelled");
    }
  }

  return (
    <div className={compact ? "quote-actions quote-actions-compact" : "quote-actions"}>
      <button type="button" onClick={copyQuote}>
        Copy
      </button>
      <button type="button" onClick={toggleFavorite} aria-pressed={isFavorite}>
        {isFavorite ? "Favorited" : "Favorite"}
      </button>
      <button type="button" onClick={shareQuote}>
        Share
      </button>
      {status && <span className="quote-action-status">{status}</span>}
    </div>
  );
}
