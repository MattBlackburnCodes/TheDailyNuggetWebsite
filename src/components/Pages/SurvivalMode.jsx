import { useState } from 'react'
import { createMissingWordRound } from './gameData.js'
import SocialSharePanel from './SocialSharePanel.jsx'
import PageMeta from '../PageMeta.jsx'

const getBestScore = () => Number(localStorage.getItem('dailyNuggetSurvivalBest')) || 0
const getShareUrl = () => `${window.location.origin}/games/survival`

export default function SurvivalMode() {
  const [questionQueue, setQuestionQueue] = useState(() => createMissingWordRound(15))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [survivalScore, setSurvivalScore] = useState(0)
  const [bestScore, setBestScore] = useState(getBestScore)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [runOver, setRunOver] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [shareStatus, setShareStatus] = useState('')

  const currentQuestion = questionQueue[currentQuestionIndex]
  const shareMessage = `I survived ${survivalScore} quotes on Daily Nugget Survival Mode.`
  const shareUrl = getShareUrl()

  const endRun = (finalScore) => {
    if (finalScore > bestScore) {
      localStorage.setItem('dailyNuggetSurvivalBest', String(finalScore))
      setBestScore(finalScore)
    }

    setRunOver(true)
  }

  const handleAnswer = (option) => {
    if (selectedAnswer || runOver) return

    setSelectedAnswer(option)

    if (option !== currentQuestion.answer) {
      setFeedback(`Run ended. The missing word was "${currentQuestion.answer}".`)
      endRun(survivalScore)
      return
    }

    const nextScore = survivalScore + 1
    setSurvivalScore(nextScore)
    setFeedback('Correct. Keep the run alive.')

    if (currentQuestionIndex === questionQueue.length - 1) {
      setQuestionQueue((questions) => [...questions, ...createMissingWordRound(15)])
    }
  }

  const nextQuestion = () => {
    setCurrentQuestionIndex((index) => index + 1)
    setSelectedAnswer('')
    setFeedback('')
  }

  const tryAgain = () => {
    setQuestionQueue(createMissingWordRound(15))
    setCurrentQuestionIndex(0)
    setSurvivalScore(0)
    setSelectedAnswer('')
    setRunOver(false)
    setFeedback('')
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
          title: 'Daily Nugget Survival Mode',
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

  if (runOver) {
    return (
      <main className="challenge-page">
        <section className="challenge-shell challenge-results text-center">
          <p className="challenge-kicker">Survival Mode</p>
          <h1>Final score: {survivalScore}</h1>
          <p className="challenge-message">Best survival score: {bestScore}</p>
          <div className="challenge-actions">
            <button className="btn btn-blackburn-gold" type="button" onClick={shareResult}>
              Share Result
            </button>
            <button className="btn btn-outline-light" type="button" onClick={tryAgain}>
              Try Again
            </button>
          </div>
          <SocialSharePanel
            message={shareMessage}
            url={shareUrl}
            emailSubject="Daily Nugget Survival Mode"
            onCopy={copyShareText}
          />
          {shareStatus && <p className="challenge-share-status">{shareStatus}</p>}
        </section>
      </main>
    )
  }

  return (
    <main className="challenge-page">
      <PageMeta
        title="Survival Mode"
        description="Play Daily Nugget Survival Mode, an endless missing-word quote game where one wrong answer ends the run."
        path="/games/survival"
      />
      <section className="challenge-shell game-mode-shell">
        <div className="challenge-hero">
          <div>
            <p className="challenge-kicker">Survival Mode</p>
            <h1>One wrong answer ends the run.</h1>
            <p>Answer missing-word quote questions for as long as you can.</p>
          </div>
          <div className="game-score-stack">
            <span>Score: {survivalScore}</span>
            <span>Best: {bestScore}</span>
          </div>
        </div>

        <article className="challenge-card">
          <blockquote>{currentQuestion.quote}</blockquote>
          <p className="challenge-author">- {currentQuestion.author}</p>

          <div className="challenge-options">
            {currentQuestion.options.map((option) => (
              <button
                className={`challenge-option ${selectedAnswer === option ? 'is-selected' : ''}`}
                type="button"
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={Boolean(selectedAnswer)}
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && <div className="challenge-feedback">{feedback}</div>}
          {selectedAnswer === currentQuestion.answer && (
            <button className="btn btn-blackburn-gold challenge-next" type="button" onClick={nextQuestion}>
              Next
            </button>
          )}
        </article>
      </section>
    </main>
  )
}
