import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-title">Contact Me</p>

      <h2>
        Let’s <span>Work Together</span>
      </h2>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            Have a project idea or need a developer? Let’s build something great
            together.
          </p>

          <div className="contact-links">
            <a href="mailto:yourmail@gmail.com">📧 Email Me</a>
            <a href="https://wa.me/923000000000" target="_blank">
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;