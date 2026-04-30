import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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

        <h2 className="typing-text">
          <Typewriter
            words={[
              "Flutter Developer",
              "UI/UX Designer",
              "Software Engineer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h2>

        <p className="hero-desc">
          I build modern mobile apps and websites that are fast, clean, and user-focused.
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
        <img src="/profile.png" alt="profile" className="profile-img" />
      </motion.div>
    </section>
  );
}

export default Hero;