import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOCAL_CATEGORIES } from "../Pages/ExploreCategory.jsx";
import QuoteActions from "../Pages/QuoteActions.jsx";

function getCategoryGroups() {
  return Object.entries(LOCAL_CATEGORIES)
    .filter(([categoryKey]) => categoryKey !== "favorites")
    .map(([categoryKey, category]) => ({
      categoryKey,
      categoryTitle: category.title,
      items: category.items.map((item, index) => {
        const quoteId = item.sourceQuoteId ?? item.id ?? index;

        return {
          id: `${categoryKey}-${quoteId}`,
          categoryKey,
          categoryTitle: category.title,
          quoteId,
          text: item.text,
          author: item.author || null,
          route: `/explore/${categoryKey}/${quoteId}`,
        };
      }),
    }))
    .filter((category) => category.items.length > 0);
}

function getTodayDateId() {
  return new Date().toLocaleDateString("en-CA");
}

function getFormattedToday(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getMillisecondsUntilMidnight() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 1, 0);

  return tomorrow.getTime() - now.getTime();
}

function getHashValue(text) {
  return text.split("").reduce((hash, character) => {
    return (hash * 31 + character.charCodeAt(0)) >>> 0;
  }, 7);
}

function getDaysSinceEpoch(dateId) {
  return Math.floor(new Date(`${dateId}T00:00:00`).getTime() / 86400000);
}

function getDailyEntry(dateId, categoryGroups) {
  if (categoryGroups.length === 0) return null;

  const dayNumber = getDaysSinceEpoch(dateId);
  const categorySeed = getHashValue("daily-nugget-category-order");
  const categoryIndex = (dayNumber + categorySeed) % categoryGroups.length;
  const selectedCategory = categoryGroups[categoryIndex];
  const quoteSeed = getHashValue(`${dateId}-${selectedCategory.categoryKey}`);
  const quoteIndex = quoteSeed % selectedCategory.items.length;

  return selectedCategory.items[quoteIndex];
}

export default function NuggetArchivePreview() {
  const [todayDateId, setTodayDateId] = useState(getTodayDateId);
  const [dayOffset, setDayOffset] = useState(0);
  const categoryGroups = getCategoryGroups();
  const selectedDate = new Date(`${todayDateId}T00:00:00`);
  selectedDate.setDate(selectedDate.getDate() - dayOffset);
  const selectedDateId = selectedDate.toLocaleDateString("en-CA");
  const currentEntry = getDailyEntry(selectedDateId, categoryGroups) || {
    categoryTitle: "Daily Nugget",
    categoryKey: "quotes",
    quoteId: 0,
    text: "A fresh nugget is getting ready for the day.",
    author: "The Daily Nugget",
    route: "/explore/quotes",
  };

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setTodayDateId(getTodayDateId());
      setDayOffset(0);
    }, getMillisecondsUntilMidnight());

    return () => window.clearTimeout(timerId);
  }, [todayDateId]);

  function showPreviousDay() {
    setDayOffset((offset) => offset + 1);
  }

  function showNextDay() {
    setDayOffset((offset) => Math.max(offset - 1, 0));
  }

  return (
    <section className="home-archive-preview bg-blackburn-gray">
      <div className="container text-gold">
        <article className="home-archive-carousel shadow-inset">
          <div className="home-archive-carousel-top">
            <div>
              <span className="bg-blackburn-dark-yellow rounded-pill px-3 py-2 d-inline-block">
                Nugget of the Day
              </span>
              <h2>{currentEntry.categoryTitle}</h2>
              <p className="home-archive-date">{dayOffset === 0 ? getFormattedToday() : getFormattedToday(selectedDate)}</p>
            </div>
            <Link className="home-archive-open-link" to={currentEntry.route}>
              Open Nugget
            </Link>
          </div>

          <Link className="home-archive-quote-link" to={currentEntry.route}>
            <p>{currentEntry.text}</p>
            {currentEntry.author && <small>- {currentEntry.author}</small>}
          </Link>

          <QuoteActions
            categoryKey={currentEntry.categoryKey}
            quote={currentEntry}
            quoteId={currentEntry.quoteId}
            compact
          />

          <div className="home-archive-controls" aria-label="Nugget of the Day history controls">
            <button type="button" onClick={showPreviousDay} aria-label="Show previous day's nugget">
              ‹
            </button>
            <span>{dayOffset === 0 ? "Today" : `${dayOffset} day${dayOffset === 1 ? "" : "s"} ago`}</span>
            <button type="button" onClick={showNextDay} disabled={dayOffset === 0} aria-label="Show newer nugget">
              ›
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
