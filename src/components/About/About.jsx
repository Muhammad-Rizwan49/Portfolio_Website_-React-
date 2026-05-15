import "./About.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
axios.get(`${import.meta.env.VITE_API_URL}/about`);
      setAbout(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!about) return null;

  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">About Me</p>

      <h2>
        {about.title} <span>{about.highlight_word}</span>
      </h2>

      <p className="about-text">
        {about.description}
      </p>

      <div className="about-stats">
        <div>
          <h3>{about.exp_years}</h3>
          <p>{about.exp_text}</p>
        </div>

        <div>
          <h3>{about.projects_done}</h3>
          <p>{about.projects_text}</p>
        </div>

        <div>
          <h3>{about.focus_percent}</h3>
          <p>{about.focus_text}</p>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>{about.card1_title}</h3>
          <p>{about.card1_desc}</p>
        </div>

        <div className="about-card">
          <h3>{about.card2_title}</h3>
          <p>{about.card2_desc}</p>
        </div>

        <div className="about-card">
          <h3>{about.card3_title}</h3>
          <p>{about.card3_desc}</p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;