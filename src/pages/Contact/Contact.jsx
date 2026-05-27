import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact reveal" id="contact">
      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info reveal">
          <h3>Get In Touch</h3>
          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>yanisredjradjyanis@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+213 676 938 038</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Algeria, Bejaia, Lota</span>
          </div>
        </div>

        <form className="contact-form reveal">
          <input
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;