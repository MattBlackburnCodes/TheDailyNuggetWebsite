import PageMeta from './PageMeta.jsx'

export default function TermsOfService() {
    return (
        <main className="privacy-page bg-blackburn-gray text-gold">
            <PageMeta
                title="Terms of Service"
                description="Review The Daily Nugget terms covering site use, quote games, local scores and streaks, submissions, intellectual property, and service changes."
                path="/terms-of-service"
            />
            <section className="container privacy-page-content">
                <div className="privacy-hero">
                    <p className="challenge-kicker">The Daily Nugget</p>
                    <h1>Terms of Service</h1>
                    <p className="privacy-updated">Last updated: May 8, 2026</p>

                    <p>
                        These Terms of Service govern your access to and use of The Daily Nugget
                        website, games, account features, and related mobile app experiences operated
                        by Blackburn Works LLC ("we," "us," or "our").
                    </p>

                    <p>
                        By using The Daily Nugget, you agree to these Terms. If you do not agree,
                        please do not use the website, app, games, or services.
                    </p>
                </div>

                <ol className="policy-list privacy-policy-card">
                    <li>
                        <h2>1. Use of The Daily Nugget</h2>
                        <p>
                            The Daily Nugget provides quotes, affirmations, jokes, fun facts, games,
                            community submissions, and related motivational content for personal,
                            entertainment, and informational use.
                        </p>
                        <p>
                            You agree to use the site and app only for lawful purposes and in a way
                            that does not interfere with the experience, security, or availability of
                            the service for other users.
                        </p>
                    </li>

                    <li>
                        <h2>2. No Account Required</h2>
                        <p>
                            The Daily Nugget does not currently require user accounts for the main site
                            or games. If account features are added later, additional terms may apply.
                        </p>
                    </li>

                    <li>
                        <h2>3. Games and Local Progress</h2>
                        <p>
                            Game scores, streaks, and best scores may be stored locally in your browser
                            through localStorage. This data is stored on your device and may be cleared
                            if you clear browser data, change devices, or use private browsing.
                        </p>
                        <p>
                            Game features are offered for fun and habit-building. We may change,
                            reset, remove, or update game rules, scoring, streaks, and available modes
                            at any time.
                        </p>
                    </li>

                    <li>
                        <h2>4. User Submissions</h2>
                        <p>
                            If you send us a joke, quote, affirmation, fun fact, idea, message, or other
                            content through a contact form, email, or social channel, you confirm that
                            you have the right to share it.
                        </p>
                        <p>
                            You grant Blackburn Works LLC permission to review, edit, adapt, publish,
                            or otherwise use submitted content in connection with The Daily Nugget
                            without compensation, unless we separately agree otherwise in writing.
                        </p>
                    </li>

                    <li>
                        <h2>5. Intellectual Property</h2>
                        <p>
                            The Daily Nugget name, branding, mascot, designs, site layout, original
                            copy, games, and other original materials are owned by Blackburn Works LLC
                            or used with permission.
                        </p>
                        <p>
                            You may not copy, reproduce, sell, redistribute, or create derivative works
                            from our original materials without written permission.
                        </p>
                    </li>

                    <li>
                        <h2>6. Quotes and Third-Party Content</h2>
                        <p>
                            Some quotes, references, names, links, or external services may belong to
                            third parties. We do our best to present quote information accurately, but
                            we do not guarantee that all attribution, wording, or source details are
                            complete or error-free.
                        </p>
                    </li>

                    <li>
                        <h2>7. Prohibited Conduct</h2>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Use the service for unlawful, harmful, or abusive activity</li>
                            <li>Attempt to disrupt, reverse engineer, scrape, or overload the site</li>
                            <li>Submit content that infringes another person's rights</li>
                            <li>Misrepresent your identity or relationship with The Daily Nugget</li>
                            <li>Use our branding or mascot without permission</li>
                        </ul>
                    </li>

                    <li>
                        <h2>8. Service Changes and Availability</h2>
                        <p>
                            We may update, suspend, or discontinue any part of The Daily Nugget at any
                            time. We do not guarantee that the website, app, games, account features, or
                            integrations will always be available or error-free.
                        </p>
                    </li>

                    <li>
                        <h2>9. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Blackburn Works LLC is not liable
                            for indirect, incidental, special, consequential, or punitive damages arising
                            from your use of The Daily Nugget.
                        </p>
                    </li>

                    <li>
                        <h2>10. Changes to These Terms</h2>
                        <p>
                            We may update these Terms from time to time. When we do, the "Last updated"
                            date will be changed. Continued use of The Daily Nugget after changes means
                            you accept the updated Terms.
                        </p>
                    </li>

                    <li>
                        <h2>11. Contact Us</h2>
                        <p>If you have questions about these Terms, contact us at:</p>
                        <p><strong>Email:</strong> jointhecrispycrew@gmail.com</p>
                        <p><strong>Website:</strong> https://thedailynugget.app</p>
                    </li>
                </ol>
            </section>
        </main>
    )
}
