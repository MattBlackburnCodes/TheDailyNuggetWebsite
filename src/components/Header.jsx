import nugget from '../assets/New_App_Image.png'
import appLogo from '../assets/AppStoreImage.svg'
import PageMeta from './PageMeta.jsx'

export default function Header() {
    return (
        <div>
            <PageMeta
                title="The Daily Nugget"
                description="The Daily Nugget delivers quick quotes, affirmations, jokes, fun facts, quote games, and Chick E. Nugget merch for a lighter daily habit."
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
                        <img
                        className="img-fluid rounded"
                        style={{ maxWidth: 320, width: "100%" }}
                        src={nugget}
                        alt="Chick E. Nugget"
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
