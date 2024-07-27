import React from 'react';
import './contactForm.css';

const ContactForm = () => {
  const [result, setResult] = React.useState('');

  const key = process.env.REACT_APP_EMAIL_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', key);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="formStyle">
        <div className="names">
          <label className="labels">
            Name
            <input className="inputs" type="text" name="name" required />
          </label>
        </div>
        <div className="emails">
          <label className="labels">
            Email
            <input className="inputs" type="email" name="email" required />
          </label>
        </div>
        <div className="messages">
          <label className="labels">
            Message
            <textarea
              className="inputs messagesSpace"
              name="message"
              required
            ></textarea>
          </label>
        </div>
        <div className="buttonPosition">
          <button type="submit" className="button" color={'#00CCFF'}>
            Send Message{' '}
          </button>
        </div>
        <div>
          <span className="resultMessage">{result}</span>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
