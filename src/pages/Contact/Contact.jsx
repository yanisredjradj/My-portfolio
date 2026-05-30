import { useRef, useState, useCallback } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import Toast from "../../components/Toast"

function Contact() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const closeToast = useCallback(() => setToast(null), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      "service_l5n5zg5",
      "rv92bel",
      formRef.current,
      "abow1vn_0IwdEKli"
    ).then(() => {
      setLoading(false)
      setToast({ message: "Message sent successfully!", type: "success" })
      formRef.current.reset()
    }).catch(() => {
      setLoading(false)
      setToast({ message: "Something went wrong. Try again.", type: "error" })
    })
  }

  return (
    <div className="contact reveal" id="contact">
      {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}

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
        </form>
      </div>
    </div>
  )
}

export default Contact