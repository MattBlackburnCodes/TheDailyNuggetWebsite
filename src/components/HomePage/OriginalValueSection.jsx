import { Link } from "react-router-dom";

const valueCards = [
  {
    title: "How Daily Nuggets Work",
    text: "A quick guide to the daily quote, joke, fact, affirmation, and game experience.",
    route: "/how-daily-nuggets-work",
  },
  {
    title: "About Chick E. Nugget",
    text: "Meet the mascot and original voice behind The Daily Nugget.",
    route: "/about-chick-e-nugget",
  },
  {
    title: "Daily Motivation Habit",
    text: "Use small nuggets as repeatable prompts for reflection, humor, and action.",
    route: "/daily-motivation-habit",
  },
  {
    title: "Community Nuggets Guide",
    text: "See how user submissions are reviewed and added to the site.",
    route: "/community-nuggets-guide",
  },
];

export default function OriginalValueSection() {
  return (
    <section className="original-value-section bg-blackburn-gray">
      <div className="container text-gold">
        <div className="original-value-header">
          <span className="bg-blackburn-dark-yellow rounded-pill px-3 py-2 d-inline-block">
            What Makes It Different
          </span>
          <h2>More than a quote list</h2>
          <p>
            The Daily Nugget combines original mascot-driven content, daily prompts, games,
            personalization, and reviewed community submissions into one small daily habit.
          </p>
        </div>

        <div className="original-value-grid">
          {valueCards.map((card) => (
            <article className="original-value-card shadow-inset" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.route}>Read More</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
