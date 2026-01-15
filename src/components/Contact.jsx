import ContactForm from './ContactForm.jsx';

export default function Contact() {
    return (
        <section id="contact" className="bg-blackburn-black">
            <div className="bg-light bg-blackburn-black">
                <div className="row gx-4 justify-content-center bg-blackburn-black py-5">
                    <div className="col-lg-8 text-gold">
                        <h2>Contact Us</h2>
                        <p className="lead">Have a question, feedback, or a nugget of your own to share? (Joke, quote, affirmation, or fun fact?) We’d love to hear from you!</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}