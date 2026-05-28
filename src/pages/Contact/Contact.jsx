import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    emailjs.sendForm(
      "service_l5n5zg5",
      "rv92bel",
      formRef.current,
      "abow1vn_0IwdEKli"
    ).then(() => {
      setStatus("success")
      setLoading(false)
      formRef.current.reset()
    }).catch(() => {
      setStatus("error")
      setLoading(false)
    })
  }

  return (
    <div className="contact reveal" id="contact">
      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info reveal">
          <h3>Get In Touch</h3>
          <p>If you want to work together or have any question, feel free to contact me.</p>

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

        <form className="contact-form reveal" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-success">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="form-error">❌ Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact