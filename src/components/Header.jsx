import { useEffect, useRef, useState } from 'react'
import appLogo from '../assets/AppStoreImage.svg'
import PageMeta from './PageMeta.jsx'
import normalFace from '../assets/mascot-faces/nugget-normal.png'
import winkFace from '../assets/mascot-faces/nugget-wink.png'
import happySquintFace from '../assets/mascot-faces/nugget-happy-squint.png'
import coolFace from '../assets/mascot-faces/nugget-cool.png'
import surprisedFace from '../assets/mascot-faces/nugget-surprised.png'
import kissFace from '../assets/mascot-faces/nugget-kiss.png'
import happyOpenFace from '../assets/mascot-faces/nugget-happy-open.png'
import excitedSquintFace from '../assets/mascot-faces/nugget-excited-squint.png'
import softSmileFace from '../assets/mascot-faces/nugget-soft-smile.png'

const mascotExpressions = [
    { name: 'wink', image: winkFace, className: 'is-rocking', duration: 2600 },
    { name: 'happy squint', image: happySquintFace, className: 'is-excited', duration: 2400 },
    { name: 'cool', image: coolFace, className: 'is-cool', duration: 2400 },
    { name: 'surprised', image: surprisedFace, className: 'is-pop', duration: 2200 },
    { name: 'kiss', image: kissFace, className: 'is-kissy', duration: 2600 },
    { name: 'happy', image: happyOpenFace, className: 'is-bouncy', duration: 2400 },
    { name: 'excited squint', image: excitedSquintFace, className: 'is-excited', duration: 2400 },
    { name: 'soft smile', image: softSmileFace, className: 'is-soft-rock', duration: 2400 },
]

function getRandomExpression(previousExpression) {
    const options = mascotExpressions.filter((expression) => expression.name !== previousExpression?.name)
    return options[Math.floor(Math.random() * options.length)]
}

function AnimatedHeroMascot() {
    const [activeExpression, setActiveExpression] = useState(null)
    const expressionRef = useRef(null)

    useEffect(() => {
        let resetTimerId

        const intervalId = window.setInterval(() => {
            const nextExpression = getRandomExpression(expressionRef.current)
            expressionRef.current = nextExpression
            setActiveExpression(nextExpression)

            resetTimerId = window.setTimeout(() => {
                setActiveExpression(null)
            }, nextExpression.duration)
        }, 15000)

        return () => {
            window.clearInterval(intervalId)
            window.clearTimeout(resetTimerId)
        }
    }, [])

    const expression = activeExpression || {
        name: 'normal',
        image: normalFace,
        className: '',
    }

    return (
        <div className="hero-mascot-stage" aria-label="Chick E. Nugget mascot">
            <img
                className={`hero-mascot-face ${expression.className}`}
                src={expression.image}
                alt="Chick E. Nugget"
            />
        </div>
    )
}

export default function Header() {
    return (
        <div>
            <PageMeta
                title="The Daily Nugget"
                description="The Daily Nugget delivers quick quotes, affirmations, jokes, fun facts, quote games, and Chick E. Nugget originals for a lighter daily habit."
                path="/"
            />
            <div className="bg-blackburn-black text-gold py-5" >
                <div className="container px-4 ">
                    <div className="row align-items-center g-4">

                    {/* Text / CTA */}
                    <div className="col-12 col-lg-7 text-center text-lg-start">
                        <p className="lead mb-4 text-white text-uppercase opacity-75 small">
                            Quotes • Facts • Affirmations • Jokes.
                        </p>
                        <h1 className="fw-bolder display-5 display-md-4 display-lg-3">
                            A tiny nugget of motivation, humor, or calm - right when you need it.
                        </h1>
                        <p className="lead mb-4 text-white">
                            Tap a mood, get a nugget, move on with your day a little lighter. Simple. Fast. No doom-scrolling required.
                        </p>

                        

                        <a
                        href="https://apps.apple.com/us/app/thedailynugget/id6745912191"
                        className="d-inline-block"
                        >
                            <img className="img-fluid" style={{ maxWidth: 180 }} src={appLogo} alt="App Store" />
                        </a>
                    </div>

                    {/* Hero image */}
                    <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                        <AnimatedHeroMascot />
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
