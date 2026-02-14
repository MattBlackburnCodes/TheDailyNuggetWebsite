import { useState } from "react";

const ENDPOINTS = {
  motivate: "https://api-motivation.vercel.app/api/mood",
  inspired: "https://api-motivation.vercel.app/api/mood",
  funny: "https://api-motivation.vercel.app/api/mood",
  calm: "https://api-motivation.vercel.app/api/mood",
};

export default function MoodLogic() {
  const [quote, setQuote] = useState(
    "You don’t need a perfect plan — you need a first step."
  );
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(null);

  async function fetchNewQuote(type) {
    setLoading(true);
    setActive(type);

    try {
      const res = await fetch(ENDPOINTS[type]);
      const data = await res.json();

      // API returns [[ { id, q }, ... ]]
      const list = data?.[type] ?? [];
      const random = list[Math.floor(Math.random() * list.length)];

      setQuote(random?.q ?? "No quote returned 😬");
    } catch (err) {
      console.error(err);
      setQuote("Something went wrong 😬");
    } finally {
      setLoading(false);
      setActive(null);
    }
}

  return (
    <>
      <span className="bg-blackburn-dark-yellow rounded-pill px-3 py-2 d-inline-block">
        Mood
      </span>
      <div className="col-12 text-left my-3">
        <p className="mb-3">{loading ? "_" : quote}</p>
      </div>

      <div className="row justify-content-start gy-2">
        <div className="col-12 col-md-3">
          <button
            className="btn btn-blackburn-gold rounded-pill w-100"
            onClick={() => fetchNewQuote("motivate")}
            disabled={loading}
          >
            {active === "motivate" ? "Fetching..." : "💪 Motivate"}
          </button>
        </div>

        <div className="col-12 col-md-3">
          <button
            className="btn btn-blackburn-gold rounded-pill w-100"
            onClick={() => fetchNewQuote("inspired")}
            disabled={loading}
          >
            {active === "inspired" ? "Fetching..." : "💡 Inspired"}
          </button>
        </div>

        <div className="col-12 col-md-3">
          <button
            className="btn btn-blackburn-gold rounded-pill w-100"
            onClick={() => fetchNewQuote("funny")}
            disabled={loading}
          >
            {active === "funny" ? "Fetching..." : "😂 Funny"}
          </button>
        </div>

        <div className="col-12 col-md-3">
          <button
            className="btn btn-blackburn-gold rounded-pill w-100"
            onClick={() => fetchNewQuote("calm")}
            disabled={loading}
          >
            {active === "calm" ? "Fetching..." : "😌 Calm"}
          </button>
        </div>
      </div>
    </>
  );
}