import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="small-text">Welcome To My Portfolio</p>

        <h1>
          Hi, I'm <span>Muhammad Rizwan</span>
        </h1>

        <h2>
          Software Engineer | Flutter Developer | UI/UX Designer
        </h2>

        <p className="hero-desc">
          I build premium mobile apps, modern websites, and clean user
          experiences that help businesses grow faster.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="#contact">
            <button className="dark-btn">Hire Me</button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/profile.png"
          alt="Muhammad Rizwan"
          className="profile-img"
        />
      </motion.div>
    </section>
  );
}

export default Hero;