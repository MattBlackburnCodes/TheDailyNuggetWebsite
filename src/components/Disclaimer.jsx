import PageMeta from './PageMeta.jsx'

export default function Disclaimer() {
    return (
        <main className="privacy-page bg-blackburn-gray text-gold">
            <PageMeta
                title="Disclaimer"
                description="Read The Daily Nugget disclaimer about motivational content, quote attribution, AI-generated game prompts, merchandise, external links, and professional advice."
                path="/disclaimer"
            />
            <section className="container privacy-page-content">
                <div className="privacy-hero">
                    <p className="challenge-kicker">The Daily Nugget</p>
                    <h1>Disclaimer</h1>
                    <p className="privacy-updated">Last updated: May 8, 2026</p>

                    <p>
                        The Daily Nugget is designed to provide quick moments of motivation,
                        encouragement, humor, curiosity, and entertainment. The content on this site,
                        in our games, and in related app experiences is provided for general
                        informational and entertainment purposes only.
                    </p>
                </div>

                <ol className="policy-list privacy-policy-card">
                    <li>
                        <h2>1. Not Professional Advice</h2>
                        <p>
                            The Daily Nugget does not provide medical, mental health, legal, financial,
                            career, relationship, or other professional advice. Quotes, affirmations,
                            jokes, facts, games, and motivational content should not be used as a
                            substitute for guidance from qualified professionals.
                        </p>
                    </li>

                    <li>
                        <h2>2. Motivational Content</h2>
                        <p>
                            Motivational and affirmation content is meant to encourage reflection and
                            positive habits. We cannot guarantee that any content will produce a
                            specific emotional, personal, professional, or health-related result.
                        </p>
                    </li>

                    <li>
                        <h2>3. Quote Accuracy and Attribution</h2>
                        <p>
                            We try to present quotes and author information accurately, but quote
                            attribution can be difficult to verify. Some quotes may be paraphrased,
                            commonly attributed, incorrectly attributed by public sources, or missing
                            full context.
                        </p>
                    </li>

                    <li>
                        <h2>4. AI-Generated and Game Content</h2>
                        <p>
                            Some game content, including "Real or Fake" style prompts, may include
                            AI-generated text for entertainment. These items are not presented as real
                            quotes unless identified as such.
                        </p>
                        <p>
                            Game scores, streaks, results, and share text are for entertainment and
                            personal use only.
                        </p>
                    </li>

                    <li>
                        <h2>5. Fun Facts and Informational Content</h2>
                        <p>
                            Fun facts and informational nuggets are intended to spark curiosity. While
                            we aim to keep information reasonable and useful, we do not guarantee that
                            every fact is complete, current, or applicable to your situation.
                        </p>
                    </li>

                    <li>
                        <h2>6. Merchandise</h2>
                        <p>
                            Product images, descriptions, pricing, availability, shipping times, and
                            fulfillment details may change. Merchandise may be managed or fulfilled by
                            third-party platforms, printers, or commerce services.
                        </p>
                    </li>

                    <li>
                        <h2>7. External Links and Third-Party Services</h2>
                        <p>
                            The Daily Nugget may link to third-party websites, platforms, stores, or
                            services. We are not responsible for the content, policies, availability, or
                            practices of those third parties.
                        </p>
                    </li>

                    <li>
                        <h2>8. No Warranties</h2>
                        <p>
                            The Daily Nugget is provided "as is" and "as available." We make no
                            warranties that the website, app, games, content, or integrations will be
                            uninterrupted, error-free, secure, or always available.
                        </p>
                    </li>

                    <li>
                        <h2>9. Contact Us</h2>
                        <p>If you have questions about this Disclaimer, contact us at:</p>
                        <p><strong>Email:</strong> jointhecrispycrew@gmail.com</p>
                        <p><strong>Website:</strong> https://thedailynugget.app</p>
                    </li>
                </ol>
            </section>
        </main>
    )
}
