import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const templateParams = {
      user_email: email,
      subject: subject,
      message: message,
    };

    try {
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual Service ID and Template ID
      await emailjs.send('service_65z17x41', 'template_bw0ocdr', templateParams, 'Sj7tZLR-yvIAnWwpp');
      setSubmitted(true);
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject - Please include a name!"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="button-container">
          <button type="submit">Send</button>
        </div>
        {submitted && (
          <div className="confirmation-message">
            Thank you for your interest! I will get back to you shortly!
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
