import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("movkejjn");
  if (state.succeeded) {
      return <p className='text-success lead'>Your nugget just made it into the bucket! Thanks for sharing.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label lead">
            Name
        </label>
        <div className="mb-3">
            <input
                className="form-control"
                id="name"
                type="text"
                name="name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
        </div>
        <label htmlFor="email" className="form-label lead">
            Email Address
        </label>
        <div className="mb-3">
            <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            />
        
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
      </div>
        <label htmlFor="message" className="form-label lead">
            Message
        </label>
        <div className="mb-3">
            <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
            />
        </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btn btn-primary" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}