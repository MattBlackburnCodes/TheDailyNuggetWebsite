import ContactForm from './ContactForm.jsx';

export default function Contact() {
    return (
        <section id="contact" className="contact-page bg-blackburn-black">
            <div className="container contact-page-content">
                <div className="row gx-5 gy-4 align-items-center">
                    <div className="col-12 col-lg-5 text-gold">
                        <h2>Contact Us</h2>
                        <p className="lead text-white">Have a question, feedback, or a nugget of your own to share? We would love to hear from you.</p>
                        <p className="lead text-white">Send a joke, quote, affirmation, fun fact, game idea, or anything that could make The Daily Nugget better.</p>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="contact-form-panel">
                        <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
