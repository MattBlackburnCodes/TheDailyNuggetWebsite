import PageMeta from './PageMeta.jsx'

export default function PrivacyPolicy() {
    return (
        <main className="privacy-page bg-blackburn-gray text-gold">
            <PageMeta
                title="Privacy Policy"
                description="Read The Daily Nugget privacy policy for the website and app, including accounts, submissions, favorites, XP, notifications, ads, forms, Firebase, and third-party services."
                path="/privacy-policy"
            />
            <section className="container privacy-page-content">
                <div className="privacy-hero">
                    <p className="challenge-kicker">The Daily Nugget</p>
                    <h1>Privacy Policy</h1>
                    <p className="privacy-updated">Last updated: May 30, 2026</p>

                    <p>
                        Blackburn Works LLC (“we,” “us,” or “our”) operates The Daily Nugget website,
                        related web features, and The Daily Nugget mobile application (collectively,
                        “The Daily Nugget,” “the Service,” “the Site,” or “the App”). This Privacy
                        Policy explains how we collect, use, disclose, and protect information when
                        you use our website, app, games, account features, community submission tools,
                        contact forms, and related services.
                    </p>

                    <p>
                        By using The Daily Nugget, you agree to the collection and use of information
                        described in this Privacy Policy. If you do not agree, please do not use the
                        Service.
                    </p>
                </div>

            <ol className="policy-list privacy-policy-card">

                <li>
                    <h2>1. Information We Collect</h2>

                    <ol className="policy-sublist">

                        <li>
                            <h3>1.1 Account Information</h3>

                            <p>
                                Some website features allow you to create an account using email and
                                password authentication. When you create or use an account, we may collect
                                and store information such as:
                            </p>

                            <ul>
                                <li>Email address</li>
                                <li>Username or display name</li>
                                <li>User ID created by our authentication provider</li>
                                <li>Account creation and update timestamps</li>
                                <li>Profile fields such as XP, streaks, badges, ranks, saved nugget counts, and submission counts</li>
                            </ul>
                        </li>

                        <li>
                            <h3>1.2 Content You Submit or Save</h3>

                            <p>
                                If you submit community nuggets, save favorites, play games, or interact
                                with account features, we may store information related to those actions,
                                including:
                            </p>

                            <ul>
                                <li>Submitted quotes, jokes, affirmations, fun facts, calm reminders, or original nuggets</li>
                                <li>Submission category, author, punchline, source note, or related text you provide</li>
                                <li>Submission status, such as pending, approved, or rejected</li>
                                <li>Favorites, saved nuggets, XP awards, streaks, badges, ranks, and other progress information</li>
                                <li>Game progress or scores stored locally or in your account profile where applicable</li>
                            </ul>
                        </li>

                        <li>
                            <h3>1.3 Contact and Form Information</h3>

                            <p>
                                If you contact us by email or through a website form, we may receive the
                                information you voluntarily provide, such as your name, email address,
                                message, feedback, support request, or business inquiry.
                            </p>
                        </li>

                    </ol>
                </li>

                <li>
                    <h2>2. Automatically Collected Information</h2>

                    <ol className="policy-sublist">

                        <li>
                            <h3>2.1 Website, App, Device, and Usage Data</h3>

                            <p>
                                When you use the Site or App, we and our service providers may collect
                                limited technical and usage information, such as:
                            </p>
                            <ul>
                                <li>Browser type, device type, and operating system</li>
                                <li>App version, if you use the mobile app</li>
                                <li>Operating system version</li>
                                <li>Pages viewed, features used, and general interaction events</li>
                                <li>Approximate location inferred from IP address, where provided by third-party services</li>
                                <li>Crash logs, error logs, and performance data</li>
                            </ul>

                            <p>This information helps us improve performance, stability, safety, and user experience.</p>
                        </li>

                        <li>
                            <h3>2.2 Cookies and Local Storage</h3>

                            <p>
                                The website may use browser storage, cookies, or similar technologies to
                                support features such as favorites, appearance settings, game progress,
                                streaks, login sessions, search behavior, and basic site functionality.
                            </p>
                            <p>
                                Some information may be stored locally on your device unless you create an
                                account or use a feature that stores information in the cloud.
                            </p>
                        </li>

                        <li>
                            <h3>2.3 Advertising Data</h3>

                            <p>
                                The Daily Nugget app may use Google AdMob to display ads. The website may
                                use Google AdSense or similar advertising services if ads are enabled.
                                Advertising providers may collect or receive information such as:
                            </p>

                            <ul>
                                <li>Device or browser information</li>
                                <li>Advertising identifiers, where available</li>
                                <li>Cookie or similar identifiers</li>
                                <li>Approximate location, such as country or region</li>
                                <li>Interactions with ads, such as views or clicks</li>
                            </ul>

                            <p>
                                You can manage ad personalization through your device settings, browser
                                settings, or Google advertising settings where available.
                            </p>
                        </li>

                    </ol>
                </li>

                <li>
                    <h2>3. How We Use Information</h2>

                    <ol className="policy-sublist">
                        <li>
                            <h3>3.1 Purpose of Data Use</h3>
                            <p>We use collected information to:</p>
                            <ul>
                                <li>Create, authenticate, and manage user accounts</li>
                                <li>Store favorites, submissions, XP, streaks, badges, ranks, and profile progress</li>
                                <li>Review, approve, reject, and display community-submitted nuggets</li>
                                <li>Provide quote, joke, fact, affirmation, search, game, and personalization features</li>
                                <li>Respond to messages, support requests, or feedback</li>
                                <li>Improve website and app performance and user experience</li>
                                <li>Fix bugs and technical issues</li>
                                <li>Display, measure, and improve advertisements if ads are enabled</li>
                                <li>Understand how features are used</li>
                                <li>Provide app notifications if enabled</li>
                                <li>Protect the Service from spam, abuse, fraud, or misuse</li>
                            </ul>
                        </li>
                    </ol>
                </li>

                <li>
                    <h2>4. Notifications</h2>
                    <p>
                        If you opt in, the App may send daily notifications (quotes, affirmations, jokes,
                        or fun facts). You can disable notifications at any time through your device
                        settings. Notification permissions and delivery may be handled by your device
                        platform or app service providers.
                    </p>
                </li>

                <li>
                    <h2>5. Third-Party Services</h2>
                    <p>
                        The Daily Nugget may use third-party services that process information according
                        to their own privacy policies. These may include:
                    </p>
                    <ul>
                        <li>Firebase / Google Cloud for authentication, account profiles, and database storage</li>
                        <li>Google AdMob for mobile app advertising</li>
                        <li>Google AdSense or related Google advertising services for website advertising, if enabled</li>
                        <li>Formspree or similar form services for contact form submissions</li>
                        <li>Expo / React Native services for mobile app development and app functionality</li>
                        <li>Vercel or similar hosting providers for website hosting and serverless functions</li>
                    </ul>
                    <p>
                        We encourage you to review the privacy policies of any third-party services you
                        interact with through the Site or App.
                    </p>
                </li>

                <li>
                    <h2>6. Data Retention</h2>
                    <p>
                        We retain account information, profile data, favorites, submissions, XP, streaks,
                        badges, ranks, and related user data for as long as needed to provide the Service,
                        comply with legal obligations, resolve disputes, enforce our terms, and maintain
                        site safety.
                    </p>
                    <p>
                        Community submissions may remain visible after approval unless removed by us or
                        deleted according to an applicable request. Technical logs, analytics, crash logs,
                        and advertising data may be retained by us or third-party providers according to
                        their retention practices.
                    </p>
                </li>

                <li>
                    <h2>7. Children’s Privacy</h2>
                    <p>
                        The Daily Nugget does not target children under 13. We do not knowingly collect
                        personal information from children. If you believe a child has provided personal
                        data, please contact us so we may delete it promptly.
                    </p>
                </li>

                <li>
                    <h2>8. Security</h2>
                    <p>
                        We take reasonable measures to protect the Site, App, accounts, and data. However,
                        no method of transmission or storage is 100% secure. You are responsible for
                        keeping your account login information safe and for using a strong password.
                    </p>
                </li>

                <li>
                    <h2>9. Your Privacy Rights</h2>
                    <p>
                        Depending on where you live, you may have rights to request access, correction,
                        deletion, or limitation of certain personal information. You may also be able to
                        opt out of certain advertising or analytics features through your browser, device,
                        or third-party provider settings.
                    </p>
                    <p>
                        To request help with account data or information you submitted, contact us using
                        the email address below. We may need to verify your request before taking action.
                    </p>
                </li>

                <li>
                    <h2>10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. When we do, the “Last
                        updated” date will be changed at the top of this page. Continued use of the Site
                        or App after changes means you accept the updated Privacy Policy.
                    </p>
                </li>

                <li>
                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, contact us at:
                    </p>
                    <p><strong>Email:</strong> jointhecrispycrew@gmail.com</p>
                    <p><strong>Website:</strong> https://thedailynugget.app</p>
                </li>

            </ol>
            </section>
        </main>
    );
}
