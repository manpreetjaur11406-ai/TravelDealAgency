import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>TravelDealBookings</h2>

          <p>
            Your trusted travel partner for finding great hotel deals
            and planning memorable journeys.
          </p>

          <div className="social-icons">
            <a href="#!" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#!" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#!" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#hotels">Hotels</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-destinations">
          <h3>Popular Destinations</h3>

          <a href="#destinations">New York City</a>
          <a href="#destinations">Las Vegas</a>
          <a href="#destinations">Miami</a>
          <a href="#destinations">Orlando</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FaLocationDot />
            New York, USA
          </p>

          <p>
            <FaPhone />
            +1 800 555 0123
          </p>

          <p>
            <FaEnvelope />
            info@traveldealbookings.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TravelDealBookings. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;