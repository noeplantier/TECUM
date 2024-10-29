import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <main>
        <h1>Contact Us</h1>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
