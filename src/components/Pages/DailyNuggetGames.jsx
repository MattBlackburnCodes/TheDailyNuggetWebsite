import { Link } from 'react-router-dom'
import mascot from '../../assets/New_App_Image.png'

const gameModes = [
  {
    label: '',
    title: 'Daily Nugget Challenge',
    description: 'A five-question missing-word challenge built for daily streaks and quick quote practice.',
    route: '/games/daily-challenge',
    buttonText: 'Play Daily',
  },
  {
    label: '',
    title: 'Survival Mode',
    description: 'Keep your run alive by answering quote questions until one wrong answer ends the streak.',
    route: '/games/survival',
    buttonText: 'Start Run',
  },
  {
    label: '',
    title: 'Real or Fake: AI vs Human',
    description: 'Guess whether each nugget came from a real quote or an AI-generated motivational line.',
    route: '/games/real-or-fake',
    buttonText: 'Guess Quotes',
  },
]

export default function DailyNuggetGames() {
  return (
    <main className="games-page">
      <section className="games-shell">
        <div className="games-hero">
          <div>
            <p className="challenge-kicker">Games</p>
            <h1>Daily Nugget Games</h1>
            <p>Pick a quote game with Chick E. Nugget and build a habit, chase a score, or test your eye.</p>
          </div>
          <img className="games-mascot" src={mascot} alt="Chick E. Nugget" />
        </div>

        <div className="games-grid">
          {gameModes.map((game) => (
            <article className="game-card" key={game.title}>
              <div>
                <p className="game-card-label">{game.label}</p>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
              </div>
              <Link className="btn btn-blackburn-gold" to={game.route}>
                {game.buttonText}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
