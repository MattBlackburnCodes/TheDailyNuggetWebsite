import { Link } from "react-router-dom";
import PageMeta from "../PageMeta.jsx";

const editorialPages = {
  "how-daily-nuggets-work": {
    title: "How Daily Nuggets Work",
    kicker: "Daily Habit",
    description:
      "Learn how The Daily Nugget turns quotes, jokes, affirmations, facts, games, and community submissions into a small daily habit.",
    intro:
      "The Daily Nugget is built around a simple idea: a small piece of useful content can shift the direction of a day. Instead of asking people to read a long article or scroll endlessly, the site gives them one quick nugget at a time.",
    sections: [
      {
        heading: "A Nugget Is Small on Purpose",
        body: [
          "A daily nugget might be a quote, a joke, an affirmation, a fun fact, a calm reminder, or an original Chick E. Nugget line. The format is short because the goal is not to overwhelm the reader. It is to create a fast moment of attention that can fit into a morning routine, a lunch break, or a reset between tasks.",
          "That is why the site is organized around quick categories, a Nugget of the Day, favorites, games, and community submissions. Each feature gives visitors a different way to interact with the same core idea: take one useful thought, then move forward.",
        ],
      },
      {
        heading: "The Daily Nugget of the Day",
        body: [
          "The Nugget of the Day gives the homepage a fresh focus every day. It pulls from the site's categories and rotates by date, so visitors can come back tomorrow and see something different without needing an account.",
          "The arrows below the daily nugget let readers revisit previous days. This makes the feature feel like a lightweight archive while still keeping the homepage focused on today's entry.",
        ],
      },
      {
        heading: "More Than Reading",
        body: [
          "The Daily Nugget also includes quote games, favorites, account XP, appearance settings, and approved community submissions. Those features help turn passive reading into a small habit. A user can read, save, share, play, submit, and come back later.",
          "That combination is what separates the site from a basic quote list. The content is meant to be browsed, played with, personalized, and gradually shaped by the community.",
        ],
      },
    ],
    links: [
      { label: "Play Daily Nugget Games", to: "/games" },
      { label: "Submit a Nugget", to: "/submit" },
      { label: "Explore Categories", to: "/#categories" },
    ],
  },
  "about-chick-e-nugget": {
    title: "About Chick E. Nugget",
    kicker: "Mascot Story",
    description:
      "Meet Chick E. Nugget, The Daily Nugget mascot and the voice behind original motivational nuggets.",
    intro:
      "Chick E. Nugget is the friendly face of The Daily Nugget: bright, simple, upbeat, and built to make daily encouragement feel less stiff.",
    sections: [
      {
        heading: "Why the Mascot Matters",
        body: [
          "A lot of quote sites feel anonymous. Chick E. Nugget gives this site a recognizable voice and a little personality. The mascot helps make encouragement feel approachable instead of overly serious.",
          "The Chick E. Nugget category is where the site can be most original. These nuggets are written for The Daily Nugget brand, not copied from famous speakers or pulled from broad quote collections.",
        ],
      },
      {
        heading: "The Chick E. Nugget Voice",
        body: [
          "Chick E. Nugget lines are usually short, warm, and practical. They focus on small steps, self-trust, consistency, humor, and getting back into rhythm after a rough day.",
          "The goal is not to sound grand. It is to sound like a tiny nudge at the right time: friendly enough to remember, simple enough to use, and light enough to share.",
        ],
      },
      {
        heading: "Where Chick E. Nugget Shows Up",
        body: [
          "Chick E. Nugget appears in original quote categories, games, daily prompts, and the overall Daily Nugget experience. As the site grows, the mascot can also support themes, badges, streak rewards, and community features.",
          "That gives The Daily Nugget a stronger identity than a plain motivational site. The mascot turns the daily habit into something visitors can recognize and return to.",
        ],
      },
    ],
    links: [
      { label: "Read Chick E. Nugget Quotes", to: "/explore/chick-e-nugget-quotes" },
      { label: "Play Games", to: "/games" },
      { label: "Explore Categories", to: "/#categories" },
    ],
  },
  "daily-motivation-habit": {
    title: "Building a Daily Motivation Habit",
    kicker: "Habit Guide",
    description:
      "A practical guide to using short quotes, affirmations, jokes, and daily nuggets as a simple motivation habit.",
    intro:
      "Motivation works best when it becomes easy to repeat. The Daily Nugget is designed to help people build that repeatable moment without turning self-improvement into homework.",
    sections: [
      {
        heading: "Start With One Small Prompt",
        body: [
          "A useful daily habit does not need to be complicated. Reading one nugget can be enough if it helps you pause, choose a better thought, or take one small action.",
          "The best use of a motivational quote is not collecting it. It is asking: what can I do with this today? That might mean sending a kind message, starting a task, taking a breath, or saving the quote for later.",
        ],
      },
      {
        heading: "Use Different Categories for Different Moods",
        body: [
          "Motivation is not the only useful category. Jokes can break tension. Calm reminders can slow down a stressful moment. Fun facts can spark curiosity. Affirmations can help people practice better self-talk.",
          "The category grid lets visitors pick what fits the moment. That makes the site more flexible than a single feed of inspirational quotes.",
        ],
      },
      {
        heading: "Make the Habit Personal",
        body: [
          "Favorites, account XP, appearance settings, and daily games make the habit feel more personal. A visitor can save the nuggets that matter, adjust how quote cards look, and come back to keep progress moving.",
          "Over time, those small interactions can make the site feel less like a page of content and more like a daily check-in.",
        ],
      },
    ],
    links: [
      { label: "Explore Motivation", to: "/explore/motivation" },
      { label: "Create an Account", to: "/account" },
      { label: "Try Daily Challenge", to: "/games/daily-challenge" },
    ],
  },
  "community-nuggets-guide": {
    title: "Community Nuggets Guide",
    kicker: "Community",
    description:
      "Learn how community-submitted nuggets work, how submissions are reviewed, and where approved nuggets appear on The Daily Nugget.",
    intro:
      "Community Nuggets let visitors help shape The Daily Nugget by submitting quotes, jokes, affirmations, fun facts, calm reminders, and original Chick E. Nugget-style lines.",
    sections: [
      {
        heading: "How Submissions Work",
        body: [
          "Users can submit a nugget through the submission form after logging in. The form asks for the category, the main text, and a supporting field such as an author, punchline, or source note depending on the type of nugget.",
          "The submitter name comes from the user's account profile, which keeps the form simple and makes community posts feel connected to real site participation.",
        ],
      },
      {
        heading: "Why Approval Matters",
        body: [
          "Submissions do not appear publicly right away. They go through admin review first. That keeps the site cleaner, safer, and more consistent for visitors.",
          "Approved nuggets can appear in their matching categories and inside the Community Nuggets section. This gives users a way to contribute while still protecting the overall quality of the site.",
        ],
      },
      {
        heading: "What Makes a Good Community Nugget",
        body: [
          "A good submission is clear, helpful, light, or interesting. It should fit the selected category and avoid hateful, explicit, misleading, or copied content that the submitter does not have the right to share.",
          "Original Chick E. Nugget-style submissions are especially valuable because they add to the site's unique voice instead of repeating what already exists elsewhere.",
        ],
      },
    ],
    links: [
      { label: "Submit a Nugget", to: "/submit" },
      { label: "Browse Community Nuggets", to: "/explore/community-nuggets" },
      { label: "Read Terms", to: "/terms-of-service" },
    ],
  },
};

export default function EditorialPage({ pageKey }) {
  const page = editorialPages[pageKey] || editorialPages["how-daily-nuggets-work"];

  return (
    <main className="editorial-page bg-blackburn-gray text-gold">
      <PageMeta title={page.title} description={page.description} path={`/${pageKey}`} />

      <article className="container editorial-page-content">
        <header className="editorial-hero">
          <p className="challenge-kicker">{page.kicker}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </header>

        <div className="editorial-body">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="editorial-links">
            <h2>Keep Exploring</h2>
            <div>
              {page.links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
