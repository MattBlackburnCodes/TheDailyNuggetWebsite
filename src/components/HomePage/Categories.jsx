import { Link } from "react-router-dom";
import chickENuggetIcon from "../../assets/ChickENuggetIcon.png";

const categories = [
  {
    icon: "🎲",
    title: "Random Quotes",
    description: "A little bit of everything.",
    route: "/explore/quotes",
    buttonText: "Explore",
  },
  {
    icon: "💪",
    title: "Motivation",
    description: "Get moving with a quick push.",
    route: "/explore/motivation",
    buttonText: "Explore",
  },
  {
    icon: "🥰",
    title: "Affirmations",
    description: "Confidence and calm.",
    route: "/explore/affirmations",
    buttonText: "Explore",
  },
  {
    icon: "😂",
    title: "Jokes",
    description: "Keep it light.",
    route: "/explore/jokes",
    buttonText: "Explore",
  },
  {
    icon: "🤓",
    title: "Fun Facts",
    description: "Quick curiosity hits.",
    route: "/explore/facts",
    buttonText: "Explore",
  },
  {
    icon: "🧘",
    title: "Calm",
    description: "Find your peace.",
    route: "/explore/calm",
    buttonText: "Explore",
  },
  {
    icon: "🇺🇸",
    title: "Presidents",
    description: "Leadership quotes from the Oval Office and beyond.",
    route: "/explore/presidents",
    buttonText: "Explore",
  },
  {
    icon: "❤️",
    title: "Love",
    description: "Warm reminders for connection and care.",
    route: "/explore/love",
    buttonText: "Explore",
  },
  {
    iconImage: chickENuggetIcon,
    title: "Chick E. Nugget Quotes",
    description: "Fresh Chick E. Nugget lines made for the brand.",
    route: "/explore/chick-e-nugget-quotes",
    buttonText: "Explore",
  },
  {
    icon: "🚀",
    title: "Entrepreneurs",
    description: "Builder energy for ideas, side hustles, and starts.",
    route: "/explore/entrepreneurs",
    buttonText: "Explore",
  },
  {
    icon: "💡",
    title: "Wisdom",
    description: "Clear reminders for better choices and perspective.",
    route: "/explore/wisdom",
    buttonText: "Explore",
  },
  {
    icon: "⭐",
    title: "Favorites",
    description: "Revisit the nuggets you saved.",
    route: "/explore/favorites",
    buttonText: "View",
  },
  {
    icon: "🤝",
    title: "Community Nuggets",
    description: "Approved nuggets from the Crispy Crew.",
    route: "/explore/community-nuggets",
    buttonText: "Explore",
  },
  {
    icon: "🎯",
    title: "Games",
    description: "Daily, survival, and real-or-fake games.",
    route: "/games",
    buttonText: "Play",
  },
];

export default function Categories() {
  return (
    <div className="bg-blackburn-gray" id="categories">
      <div className="container pt-3 pb-5 bg-blackburn-gray text-gold">
        <div className="row">
          <div className="col-12 text-left">
            <h6 className="pt-3 mb-3">
              <span className="bg-blackburn-dark-yellow rounded-pill px-3 py-2 d-inline-block">
                Explore Categories
              </span>
            </h6>
            <p className="text-left text-white">Pick your vibe. Tap, read, repeat.</p>
          </div>
        </div>

        <div className="row gy-3">
          {categories.map((category) => (
            <div className="col-12 col-md-6 col-xl-4" key={category.title}>
              <div className="p-3 shadow-inset rounded-4 h-100 category-card">
                <div className="d-flex align-items-center gap-3 mb-3">
                  {category.iconImage ? (
                    <span className="category-image-icon bg-blackburn-dark-yellow rounded-2">
                      <img src={category.iconImage} alt={`${category.title} icon`} />
                    </span>
                  ) : (
                    <span className="fs-1 bg-blackburn-dark-yellow rounded-2">{category.icon}</span>
                  )}
                  <div>
                    <h4 className="mb-1">{category.title}</h4>
                    <p className="mb-2">{category.description}</p>
                  </div>
                </div>

                <Link to={category.route} className="btn btn-blackburn-gold">
                  {category.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
