import "./Projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="projects" id="projects">
      <p className="section-title">My Work</p>

      <h2>
        Featured <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech">{project.tech_stack}</span>

            <div className="project-links">
              <Link to={`/project/${project.id}`}>
                More Details
              </Link>

              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;