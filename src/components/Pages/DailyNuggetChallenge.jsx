import { useState } from 'react'
import mascot from '../../assets/New_App_Image.png'

const challengeQuestions = [
  {
    id: 1,
    quote: 'Success is not ___, failure is not fatal: it is the courage to continue that counts.',
    answer: 'final',
    options: ['final', 'easy', 'luck', 'fast'],
    author: 'Winston Churchill',
  },
  {
    id: 2,
    quote: 'The only way to do great work is to ___ what you do.',
    answer: 'love',
    options: ['love', 'rush', 'copy', 'avoid'],
    author: 'Steve Jobs',
  },
  {
    id: 3,
    quote: "Believe you can and you're ___ there.",
    answer: 'halfway',
    options: ['halfway', 'never', 'barely', 'already'],
    author: 'Theodore Roosevelt',
  },
  {
    id: 4,
    quote: 'Do what you can, with what you have, where you ___.',
    answer: 'are',
    options: ['are', 'go', 'stand', 'wait'],
    author: 'Theodore Roosevelt',
  },
  {
    id: 5,
    quote: 'It always seems impossible until it is ___.',
    answer: 'done',
    options: ['done', 'easy', 'late', 'planned'],
    author: 'Nelson Mandela',
  },
  {
    id: 6,
    quote: 'The future belongs to those who ___ in the beauty of their dreams.',
    answer: 'believe',
    options: ['believe', 'hide', 'wait', 'wander'],
    author: 'Eleanor Roosevelt',
  },
  {
    id: 7,
    quote: 'Act as if what you do makes a difference. It ___.',
    answer: 'does',
    options: ['does', 'fades', 'stops', 'waits'],
    author: 'William James',
  },
  {
    id: 8,
    quote: 'What you get by achieving your goals is not as important as what you ___ by achieving your goals.',
    answer: 'become',
    options: ['become', 'buy', 'forget', 'borrow'],
    author: 'Zig Ziglar',
  },
  {
    id: 9,
    quote: 'The journey of a thousand miles begins with a single ___.',
    answer: 'step',
    options: ['step', 'map', 'wish', 'delay'],
    author: 'Lao Tzu',
  },
  {
    id: 10,
    quote: 'It does not matter how slowly you go as long as you do not ___.',
    answer: 'stop',
    options: ['stop', 'run', 'smile', 'plan'],
    author: 'Confucius',
  },
  {
    id: 11,
    quote: 'Everything you can imagine is ___.',
    answer: 'real',
    options: ['real', 'heavy', 'late', 'quiet'],
    author: 'Pablo Picasso',
  },
  {
    id: 12,
    quote: 'Do one thing every day that ___ you.',
    answer: 'scares',
    options: ['scares', 'bores', 'slows', 'hides'],
    author: 'Eleanor Roosevelt',
  },
  {
    id: 13,
    quote: 'Whatever you are, be a good ___.',
    answer: 'one',
    options: ['one', 'copy', 'guess', 'shadow'],
    author: 'Abraham Lincoln',
  },
  {
    id: 14,
    quote: 'If opportunity does not knock, build a ___.',
    answer: 'door',
    options: ['door', 'wall', 'chair', 'clock'],
    author: 'Milton Berle',
  },
  {
    id: 15,
    quote: 'Dream big and dare to ___.',
    answer: 'fail',
    options: ['fail', 'quit', 'stall', 'shrink'],
    author: 'Norman Vaughan',
  },
  {
    id: 16,
    quote: 'The best way out is always ___.',
    answer: 'through',
    options: ['through', 'around', 'backward', 'silent'],
    author: 'Robert Frost',
  },
  {
    id: 17,
    quote: 'You miss 100 percent of the shots you do not ___.',
    answer: 'take',
    options: ['take', 'save', 'count', 'drop'],
    author: 'Wayne Gretzky',
  },
  {
    id: 18,
    quote: 'Happiness is not something ready made. It comes from your own ___.',
    answer: 'actions',
    options: ['actions', 'excuses', 'weather', 'noise'],
    author: 'Dalai Lama',
  },
  {
    id: 19,
    quote: 'Turn your wounds into ___.',
    answer: 'wisdom',
    options: ['wisdom', 'rumors', 'anchors', 'clouds'],
    author: 'Oprah Winfrey',
  },
  {
    id: 20,
    quote: 'No pressure, no ___.',
    answer: 'diamonds',
    options: ['diamonds', 'shortcuts', 'blankets', 'echoes'],
    author: 'Thomas Carlyle',
  },
  {
    id: 21,
    quote: 'The harder the conflict, the greater the ___.',
    answer: 'triumph',
    options: ['triumph', 'nap', 'shortcut', 'secret'],
    author: 'George Washington',
  },
  {
    id: 22,
    quote: 'Energy and persistence conquer all ___.',
    answer: 'things',
    options: ['things', 'corners', 'windows', 'whispers'],
    author: 'Benjamin Franklin',
  },
  {
    id: 23,
    quote: 'A goal without a plan is just a ___.',
    answer: 'wish',
    options: ['wish', 'ticket', 'habit', 'mirror'],
    author: 'Antoine de Saint-Exupery',
  },
  {
    id: 24,
    quote: 'Quality is not an act, it is a ___.',
    answer: 'habit',
    options: ['habit', 'race', 'spark', 'button'],
    author: 'Aristotle',
  },
  {
    id: 25,
    quote: 'Well done is better than well ___.',
    answer: 'said',
    options: ['said', 'hidden', 'stored', 'drawn'],
    author: 'Benjamin Franklin',
  },
  {
    id: 26,
    quote: 'Keep your face always toward the sunshine, and shadows will fall ___ you.',
    answer: 'behind',
    options: ['behind', 'beside', 'inside', 'above'],
    author: 'Walt Whitman',
  },
  {
    id: 27,
    quote: 'The secret of getting ahead is getting ___.',
    answer: 'started',
    options: ['started', 'sleepy', 'lucky', 'lost'],
    author: 'Mark Twain',
  },
  {
    id: 28,
    quote: 'If you can dream it, you can ___ it.',
    answer: 'do',
    options: ['do', 'fold', 'fear', 'skip'],
    author: 'Walt Disney',
  },
  {
    id: 29,
    quote: 'Try to be a rainbow in someone else\'s ___.',
    answer: 'cloud',
    options: ['cloud', 'pocket', 'calendar', 'window'],
    author: 'Maya Angelou',
  },
  {
    id: 30,
    quote: 'Great things are done by a series of small things brought ___.',
    answer: 'together',
    options: ['together', 'sideways', 'quietly', 'late'],
    author: 'Vincent van Gogh',
  },
  {
    id: 31,
    quote: 'The most effective way to do it, is to ___ it.',
    answer: 'do',
    options: ['do', 'delay', 'name', 'watch'],
    author: 'Amelia Earhart',
  },
  {
    id: 32,
    quote: 'Life is either a daring adventure or ___.',
    answer: 'nothing',
    options: ['nothing', 'homework', 'traffic', 'silence'],
    author: 'Helen Keller',
  },
  {
    id: 33,
    quote: 'Be yourself; everyone else is already ___.',
    answer: 'taken',
    options: ['taken', 'ready', 'nearby', 'busy'],
    author: 'Oscar Wilde',
  },
  {
    id: 34,
    quote: 'Start where you are. Use what you have. Do what you ___.',
    answer: 'can',
    options: ['can', 'owe', 'hide', 'miss'],
    author: 'Arthur Ashe',
  },
  {
    id: 35,
    quote: 'The only impossible journey is the one you never ___.',
    answer: 'begin',
    options: ['begin', 'paint', 'carry', 'trade'],
    author: 'Tony Robbins',
  },
]

const QUESTIONS_PER_ROUND = 5

const todayKey = () => new Date().toLocaleDateString('en-CA')

const getYesterdayKey = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-CA')
}

const getStoredStreak = () => Number(localStorage.getItem('dailyNuggetChallengeStreak')) || 0

const getResultMessage = (score) => {
  if (score === 5) return 'Perfect run. You found every nugget.'
  if (score >= 3) return "Solid work. You're building the habit."
  if (score >= 1) return 'Not bad. Come back tomorrow stronger.'
  return 'Rough round, but every nugget counts.'
}

const getChallengeUrl = () => `${window.location.origin}/games/daily-challenge`

const shuffleItems = (items) => {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = shuffled[index]
    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = currentItem
  }

  return shuffled
}

const createRoundQuestions = () =>
  shuffleItems(challengeQuestions)
    .slice(0, QUESTIONS_PER_ROUND)
    .map((question) => ({
      ...question,
      options: shuffleItems(question.options),
    }))

export default function DailyNuggetChallenge() {
  const [roundQuestions, setRoundQuestions] = useState(createRoundQuestions)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)
  const [streak, setStreak] = useState(getStoredStreak)
  const [shareStatus, setShareStatus] = useState('')

  const currentQuestion = roundQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === roundQuestions.length - 1
  const shareMessage = `I scored ${score}/5 on today's Daily Nugget Challenge.`
  const shareUrl = getChallengeUrl()
  const encodedShareText = encodeURIComponent(`${shareMessage} ${shareUrl}`)
  const encodedShareUrl = encodeURIComponent(shareUrl)

  const completeChallenge = (finalScore) => {
    const today = todayKey()
    const yesterday = getYesterdayKey()
    const lastCompletedDate = localStorage.getItem('dailyNuggetChallengeLastCompleted')
    const savedStreak = getStoredStreak()
    let nextStreak = savedStreak

    // Completing more than once in a day keeps the streak where it is.
    if (lastCompletedDate === today) {
      nextStreak = savedStreak || 1
    } else if (lastCompletedDate === yesterday) {
      nextStreak = savedStreak + 1
    } else {
      nextStreak = 1
    }

    localStorage.setItem('dailyNuggetChallengeLastCompleted', today)
    localStorage.setItem('dailyNuggetChallengeStreak', String(nextStreak))
    setScore(finalScore)
    setStreak(nextStreak)
    setGameComplete(true)
  }

  const handleAnswerClick = (option) => {
    if (isAnswered) return

    setSelectedAnswer(option)
    setIsAnswered(true)

    if (option === currentQuestion.answer) {
      setScore((currentScore) => currentScore + 1)
    }
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      completeChallenge(score)
      return
    }

    setCurrentQuestionIndex((index) => index + 1)
    setSelectedAnswer('')
    setIsAnswered(false)
    setShareStatus('')
  }

  const resetGame = () => {
    setRoundQuestions(createRoundQuestions())
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer('')
    setIsAnswered(false)
    setGameComplete(false)
    setShareStatus('')
  }

  const copyShareText = async (textToCopy = `${shareMessage} ${shareUrl}`) => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setShareStatus('Copied.')
    } catch {
      setShareStatus(textToCopy)
    }
  }

  const shareResult = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Nugget Challenge',
          text: shareMessage,
          url: shareUrl,
        })
        setShareStatus('Share sheet opened.')
        return
      } catch (error) {
        if (error.name === 'AbortError') return
      }
    }

    copyShareText()
  }

  if (gameComplete) {
    return (
      <main className="challenge-page">
        <section className="challenge-shell challenge-results text-center">
          <img className="challenge-mascot" src={mascot} alt="Chick E. Nugget" />
          <p className="challenge-kicker">Daily Nugget Challenge</p>
          <h1>You scored {score}/5</h1>
          <p className="challenge-message">{getResultMessage(score)}</p>
          <p className="challenge-streak">Current streak: {streak} day{streak === 1 ? '' : 's'}</p>

          <div className="challenge-ad-space challenge-results-ad">Ad Space</div>

          <div className="challenge-actions">
            <button className="btn btn-blackburn-gold" type="button" onClick={shareResult}>
              Share Result
            </button>
            <button className="btn btn-outline-light" type="button" onClick={resetGame}>
              Play Another Round
            </button>
          </div>

          <div className="challenge-share-panel" aria-label="Share options">
            <a
              className="challenge-share-link"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="challenge-share-link"
              href={`https://twitter.com/intent/tweet?text=${encodedShareText}`}
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            <a
              className="challenge-share-link"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="challenge-share-link"
              href={`https://api.whatsapp.com/send?text=${encodedShareText}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="challenge-share-link"
              href={`mailto:?subject=Daily Nugget Challenge&body=${encodedShareText}`}
            >
              Email
            </a>
            <button className="challenge-share-link" type="button" onClick={() => copyShareText()}>
              Copy Link
            </button>
            <button className="challenge-share-link" type="button" onClick={() => copyShareText()}>
              Copy for Instagram
            </button>
          </div>
          {shareStatus && <p className="challenge-share-status">{shareStatus}</p>}
        </section>
      </main>
    )
  }

  return (
    <main className="challenge-page">
      <section className="challenge-shell">
        <div className="challenge-layout">
          <div className="challenge-main">
            <div className="challenge-hero">
              <div>
                <p className="challenge-kicker">Daily Nugget Challenge</p>
                <h1>Find the missing nugget.</h1>
                <p>
                  Chick E. Nugget picked five quotes for today. Choose the word that completes each one.
                </p>
              </div>
              <img className="challenge-mascot" src={mascot} alt="Chick E. Nugget" />
            </div>

            <div className="challenge-ad-space challenge-mid-ad">Ad Space</div>

            <div className="challenge-status-row">
              <span>Question {currentQuestionIndex + 1} of {roundQuestions.length}</span>
              <span>Score: {score}</span>
              <span>Streak: {streak}</span>
            </div>

            <article className="challenge-card">
              <blockquote>{currentQuestion.quote}</blockquote>
              <p className="challenge-author">- {currentQuestion.author}</p>

              <div className="challenge-options">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option
                  const isCorrect = option === currentQuestion.answer
                  let buttonClass = 'challenge-option'

                  if (isAnswered && isSelected) {
                    buttonClass += isCorrect ? ' is-correct' : ' is-incorrect'
                  }

                  return (
                    <button
                      className={buttonClass}
                      type="button"
                      key={option}
                      onClick={() => handleAnswerClick(option)}
                      disabled={isAnswered}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {isAnswered && (
                <div className="challenge-feedback">
                  {selectedAnswer === currentQuestion.answer
                    ? 'Correct. That nugget fits.'
                    : `Incorrect. The missing word was "${currentQuestion.answer}".`}
                </div>
              )}

              {isAnswered && (
                <button className="btn btn-blackburn-gold challenge-next" type="button" onClick={handleNextQuestion}>
                  {isLastQuestion ? 'See Results' : 'Next'}
                </button>
              )}
            </article>
          </div>

          <aside className="challenge-side-ad" aria-label="Sponsored content">
            <div className="challenge-ad-space">Ad Space</div>
          </aside>
        </div>
      </section>
    </main>
  )
}
