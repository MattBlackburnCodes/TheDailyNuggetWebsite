export default function PrivacyPolicy() {
    return (
        <div className="px-5 pb-5 pt-5 bg-blackburn-gray text-gold">
            
            <h1 className="pt-5">Privacy Policy</h1>
            <p>Last updated: December 9, 2025</p>

            <p>
                Blackburn Works LLC (“we,” “us,” or “our”) operates The Daily Nugget mobile
                application (“the App”). This Privacy Policy explains how we collect, use,
                disclose, and protect your information when you use the App.
            </p>

            <p>
                By using The Daily Nugget, you agree to the collection and use of information in
                accordance with this Privacy Policy.
            </p>

            <ol className="policy-list">

                {/* 1. Information We Collect */}
                <li>
                    <h2>1. Information We Collect</h2>

                    <ol className="policy-sublist">

                        <li>
                            <h3>1.1 Information You Provide to Us</h3>

                            <p>
                                The Daily Nugget does not require a user account, login, or personal profile.
                                Therefore, we do not collect:
                            </p>

                            <ul>
                                <li>Names</li>
                                <li>Email addresses</li>
                                <li>Phone numbers</li>
                                <li>Mailing addresses</li>
                                <li>Payment information</li>
                                <li>Location data</li>
                            </ul>

                            <p>
                                If you contact us directly (email, website form, etc.), we may receive the
                                information you voluntarily provide, such as your name or email address.
                            </p>
                        </li>

                    </ol>
                </li>

                {/* 2. Automatically Collected Information */}
                <li>
                    <h2>2. Automatically Collected Information</h2>

                    <ol className="policy-sublist">

                        <li>
                            <h3>2.1 Device & Usage Data</h3>

                            <p>
                                When you use the App, we may collect limited technical information such as:
                            </p>
                            <ul>
                                <li>Device type (iOS/Android model)</li>
                                <li>Operating system version</li>
                                <li>App version</li>
                                <li>Anonymous usage statistics (e.g., features used, crash logs)</li>
                            </ul>

                            <p>This information helps us improve performance and stability.</p>
                        </li>

                        <li>
                            <h3>2.2 Advertising Data (Google AdMob)</h3>

                            <p>The Daily Nugget uses Google AdMob to display ads. AdMob may collect:</p>

                            <ul>
                                <li>Your device’s advertising identifier (IDFA/AAID)</li>
                                <li>Approximate location (coarse, not GPS)</li>
                                <li>Interactions with ads (views/clicks)</li>
                            </ul>

                            <p>We have enabled child-safe, restricted content filters to prevent adult or inappropriate ads from appearing.</p>
                            <p>Users can reset or limit their advertising identifier in their device settings.</p>
                        </li>

                    </ol>
                </li>

                {/* 3. How We Use the Information */}
                <li>
                    <h2>3. How We Use Information</h2>

                    <ol className="policy-sublist">
                        <li>
                            <h3>3.1 Purpose of Data Use</h3>
                            <p>We use collected information to:</p>
                            <ul>
                                <li>Improve app performance and user experience</li>
                                <li>Fix bugs and technical issues</li>
                                <li>Display safe and relevant advertisements</li>
                                <li>Understand how features are used</li>
                                <li>Provide notifications if enabled</li>
                            </ul>
                        </li>
                    </ol>
                </li>

                {/* 4. Notifications */}
                <li>
                    <h2>4. Notifications</h2>
                    <p>
                        If you opt in, the App may send daily notifications (quotes, affirmations, jokes,
                        or fun facts). You can disable notifications at any time through your device
                        settings. No personal information is stored or used for this feature.
                    </p>
                </li>

                {/* 5. Third-Party Services */}
                <li>
                    <h2>5. Third-Party Services</h2>
                    <p>The App uses the following services, which have their own privacy policies:</p>
                    <ul>
                        <li>Google AdMob — https://policies.google.com/privacy</li>
                        <li>Expo / React Native Services — https://expo.dev/privacy</li>
                    </ul>
                    <p>We encourage you to review their policies for more details.</p>
                </li>

                {/* 6. Data Retention */}
                <li>
                    <h2>6. Data Retention</h2>
                    <p>
                        Since we do not collect personal data, we only retain anonymous analytics,
                        crash logs, and ad performance data for as long as necessary to improve the app.
                    </p>
                </li>

                {/* 7. Children’s Privacy */}
                <li>
                    <h2>7. Children’s Privacy</h2>
                    <p>
                        The Daily Nugget does not target children under 13. We do not knowingly collect
                        personal information from children. If you believe a child has provided personal
                        data, please contact us so we may delete it promptly.
                    </p>
                </li>

                {/* 8. Security */}
                <li>
                    <h2>8. Security</h2>
                    <p>
                        We take reasonable measures to protect the App and data. However, no method of
                        transmission or storage is 100% secure. Since no personal data is collected, risk
                        is minimal.
                    </p>
                </li>

                {/* 9. Privacy Rights */}
                <li>
                    <h2>9. Your Privacy Rights</h2>
                    <p>
                        Because we do not collect personal information, there is no personal data to
                        access, modify, or delete. If you contact us directly, we will delete any
                        voluntarily provided information upon request.
                    </p>
                </li>

                {/* 10. Changes */}
                <li>
                    <h2>10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. When we do, the “Last
                        updated” date will be changed at the top of this page. Continued use of the App
                        constitutes acceptance of any changes.
                    </p>
                </li>

                {/* 11. Contact */}
                <li>
                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, contact us at:
                    </p>
                    <p><strong>Email:</strong> jointhecrispycrew@gmail.com</p>
                    <p><strong>Website:</strong> https://thedailynugget.app</p>
                </li>

            </ol>
        </div>
    );
}
