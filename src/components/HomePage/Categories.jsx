import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="bg-blackburn-gray">
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
          <div className="col-12 col-md-4">
            <div className="p-3 shadow-inset rounded-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 bg-blackburn-dark-yellow rounded-2">🎲</span>
                <div>
                  <h4 className="mb-1">Random Quotes</h4>
                  <p className="mb-2">A little bit of everything.</p>
                </div>
              </div>

              <Link to="/explore/quotes" className="btn btn-blackburn-gold">
                Explore
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3 shadow-inset rounded-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 bg-blackburn-dark-yellow rounded-2">🤣</span>
                <div>
                  <h4 className="mb-1">Jokes</h4>
                  <p className="mb-2">Keep it light.</p>
                </div>
              </div>

              <Link to="/explore/jokes" className="btn btn-blackburn-gold">
                Explore
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3 shadow-inset rounded-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 bg-blackburn-dark-yellow rounded-2">🥰</span>
                <div>
                  <h4 className="mb-1">Affirmation</h4>
                  <p className="mb-2">Confidence and calm.</p>
                </div>
              </div>

              <Link to="/explore/affirmations" className="btn btn-blackburn-gold">
                Explore
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3 shadow-inset rounded-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 bg-blackburn-dark-yellow rounded-2">🤓</span>
                <div>
                  <h4 className="mb-1">Fun Facts</h4>
                  <p className="mb-2">Quick curiosity hits.</p>
                </div>
              </div>

              <Link to="/explore/facts" className="btn btn-blackburn-gold">
                Explore
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3 shadow-inset rounded-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 bg-blackburn-dark-yellow rounded-2">💪</span>
                <div>
                  <h4 className="mb-1">Motivation</h4>
                  <p className="mb-2">Get Moving.</p>
                </div>
              </div>

              <Link to="/explore/motivation" className="btn btn-blackburn-gold">
                Explore
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3 shadow-inset rounded-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 bg-blackburn-dark-yellow rounded-2">🧘</span>
                <div>
                  <h4 className="mb-1">Calm</h4>
                  <p className="mb-2">Find your peace.</p>
                </div>
              </div>

              <Link to="/explore/calm" className="btn btn-blackburn-gold">
                Explore
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3 shadow-inset rounded-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 bg-blackburn-dark-yellow rounded-2">🎯</span>
                <div>
                  <h4 className="mb-1">Games</h4>
                  <p className="mb-2">Play the Daily Nugget Challenge.</p>
                </div>
              </div>

              <Link to="/games" className="btn btn-blackburn-gold">
                Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
