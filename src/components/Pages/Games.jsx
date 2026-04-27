import { Link } from 'react-router-dom'
import mascot from '../../assets/New_App_Image.png'
import GoogleAd from '../GoogleAd.jsx'

export default function Games() {
  return (
    <main className="games-page">
      <section className="games-shell">
        <div className="games-hero">
          <div>
            <p className="challenge-kicker">Games</p>
            <h1>Daily Nugget Games</h1>
            <p>Quick, quote-powered games hosted by Chick E. Nugget.</p>
          </div>
          <img className="games-mascot" src={mascot} alt="Chick E. Nugget" />
        </div>

        <div className="games-grid">
          <article className="game-card">
            <div>
              <p className="game-card-label">Daily game</p>
              <h2>Daily Nugget Challenge</h2>
              <p>Fill in the missing word from five motivational quotes and keep your streak alive.</p>
            </div>
            <Link className="btn btn-blackburn-gold" to="/daily-nugget-challenge">
              Play
            </Link>
          </article>
        </div>

        <GoogleAd className="games-ad" />
      </section>
    </main>
  )
}
