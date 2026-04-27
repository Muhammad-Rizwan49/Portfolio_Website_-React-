import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Flutter", level: 90 },
    { name: "Dart", level: 85 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Firebase", level: 75 },
    { name: "UI/UX (Figma)", level: 80 },
  ];

  return (
    <section className="skills" id="skills">
      <p className="section-title">My Skills</p>

      <h2>
        Technical <span>Expertise</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-box"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-top">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;