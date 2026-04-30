import "./Contact.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [profile, setProfile] = useState({
    email: "",
    whatsapp: "",
    github: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:5000/admin-profile"
      );

      setProfile({
        email: res.data.email || "",
        whatsapp: res.data.whatsapp || "",
        github: res.data.github || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        "http://127.0.0.1:5000/contact",
        form
      );

      alert("Message Sent Successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed To Send Message");
    }

    setLoading(false);
  };

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
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            Have a project idea or need a developer?
            Let’s build something great together.
          </p>

          <div className="contact-links">
            {profile.email && (
              <a href={`mailto:${profile.email}`}>
                <span>Email Me</span>
                <FaEnvelope />
              </a>
            )}

            {profile.whatsapp && (
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <FaWhatsapp />
              </a>
            )}

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={sendMessage}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;