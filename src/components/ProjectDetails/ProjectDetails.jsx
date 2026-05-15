import "./ProjectDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/projects/${id}`
      );

      setProject(res.data);
    } catch (error) {
      console.log(error);
      setProject(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="not-found">Loading...</h1>;
  }

  if (!project) {
    return (
      <h1 className="not-found">
        Project Not Found
      </h1>
    );
  }

  const images = project.images
    ? project.images
        .split(",")
        .map((img) => img.trim())
        .filter((img) => img !== "")
    : [];

  const tech = project.tech_stack
    ? project.tech_stack
        .split(",")
        .map((item) => item.trim())
    : [];

  const features = project.features
    ? project.features
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "")
    : [];

  return (
    <section className="project-details">
      <p className="section-title">
        Project Showcase
      </p>

      <h1>{project.title}</h1>

      <p className="project-desc">
        {project.description}
      </p>

      <div className="tech-list">
        {tech.map((item, index) => (
          <span
            className="tech-badge"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="buttons">
        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>

      {images.length > 0 && (
        <>
          <h2>Screenshots</h2>

          <div className="gallery">
            {images.map((img, index) => (
              <img
                key={index}
                src={`${BASE_URL}/uploads/${img}`}
                alt="project"
              />
            ))}
          </div>
        </>
      )}

      {features.length > 0 && (
        <>
          <h2>Features</h2>

          <ul className="features">
            {features.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </>
      )}
    </section>
  );
}

export default ProjectDetails;