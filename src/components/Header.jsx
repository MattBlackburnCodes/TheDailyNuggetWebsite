import nugget from '../assets/New_App_Image.png'
import appLogo from '../assets/AppStoreImage.svg'

export default function Header() {
    return (
        <div>
            <header className="bg-blackburn-black text-gold py-5">
                <div className="container px-4">
                    <div className="row align-items-center g-4">

                    {/* Text / CTA */}
                    <div className="col-12 col-lg-7 text-center text-lg-start">
                        <h1 className="fw-bolder display-5 display-md-4 display-lg-3">
                            Welcome to The Daily Nugget
                        </h1>

                        <p className="lead mb-4">
                            Daily Nuggets of Quotes • Facts • Affirmations • Jokes.
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
            </header>
        </div>
    )
}