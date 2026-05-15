import "./Skills.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/skills`)
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.log("Error fetching skills:", error);
      });
  }, []);

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
            key={skill.id}
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