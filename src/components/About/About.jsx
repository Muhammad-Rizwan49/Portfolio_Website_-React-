import "./About.css";
import { motion } from "framer-motion";

function About() {
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
        Creating Digital Solutions With <span>Purpose</span>
      </h2>

      <p className="about-text">
        I'm Muhammad Rizwan, a dedicated Software Engineer with 4+ years of
        experience building Flutter mobile apps, modern websites, and clean UI/UX
        experiences. I focus on creating products that are fast, scalable, and
        visually impressive.
      </p>

      <div className="about-stats">
        <div>
          <h3>4+</h3>
          <p>Years Experience</p>
        </div>

        <div>
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>

        <div>
          <h3>100%</h3>
          <p>Client Focused</p>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>Flutter Apps</h3>
          <p>Cross-platform Android & iOS apps with premium UI.</p>
        </div>

        <div className="about-card">
          <h3>Web Development</h3>
          <p>Responsive business websites and web solutions.</p>
        </div>

        <div className="about-card">
          <h3>UI / UX Design</h3>
          <p>Modern user interfaces designed in Figma.</p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;