import ContactForm from './ContactForm.jsx';

export default function Contact() {
    return (
        <section id="contact" className="bg-light">
            <div className="bg-light px-5">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>Contact Us</h2>
                        <p className="lead">Have a question, feedback, or a nugget of your own to share? (Joke, quote, affirmation, or fun fact?) We’d love to hear from you!</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}