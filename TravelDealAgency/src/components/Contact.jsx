import "./Contact.css";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <p className="contact-label">GET IN TOUCH</p>

        <h2>Contact Us</h2>

        <p className="contact-subtitle">
          Have questions about your next trip? Our travel team is here to help.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Plan Your Next Journey</h3>

          <p className="contact-description">
            Whether you need help choosing a hotel or planning your trip,
            we're happy to assist you.
          </p>

          <div className="contact-detail">
            <div className="contact-icon">
              <FaLocationDot />
            </div>

            <div>
              <h4>Our Location</h4>
              <p>New York, USA</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>
              <h4>Phone</h4>
              <p>+1 800 555 0123</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>info@traveldealbookings.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <FaClock />
            </div>

            <div>
              <h4>Working Hours</h4>
              <p>Monday - Sunday: 24/7</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send Us a Message</h3>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;