import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "DriveUni App",
      desc: "University transport management system with real-time tracking.",
      tech: "Flutter • Firebase",
      live: "#",
      github: "#",
    },
    {
      title: "Kwick App",
      desc: "Delivery & service app with modern UI and payment integration.",
      tech: "Flutter • RevenueCat",
      live: "#",
      github: "#",
    },
    {
      title: "ShopSale Website",
      desc: "E-commerce platform with responsive design and admin panel.",
      tech: "React • Node",
      live: "#",
      github: "#",
    },
  ];

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
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span className="tech">{project.tech}</span>

            <div className="project-links">
              <a href={project.live} target="_blank">Live</a>
              <a href={project.github} target="_blank">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;