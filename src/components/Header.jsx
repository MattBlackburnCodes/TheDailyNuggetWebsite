export default function Header() {
    return (
        <>
            <header className="bg-primary bg-gradient text-white hero">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">Welcome to The Daily Nugget</h1>
                    <p className="lead">Daily Nuggets of Quotes • Facts • Affirmations • Jokes.</p>
                    <img className="mb-4 img-fluid mx-auto d-block w-25 rounded" src="./src/assets/TheDailyNuggetRaw.png" alt="Chick E. Nugget" />
                    <a className="" href="https://apps.apple.com/us/app/thedailynugget/id6745912191">
                        <img className="" src="./src/assets/AppStoreImage.svg" alt="App Store Icon" />
                    </a>
                </div>
            </header>
        </>
    )
}