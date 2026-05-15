import "./AdminProjects.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminProjects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [techInput, setTechInput] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: [],
    github_link: "",
    live_link: "",
    images: [],
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const getToken = () => localStorage.getItem("token");

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects`
      );

      setProjects(res.data);
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

  const addTech = () => {
    if (!techInput.trim()) return;

    setForm({
      ...form,
      tech: [...form.tech, techInput.trim()],
    });

    setTechInput("");
  };

  const removeTech = (index) => {
    setForm({
      ...form,
      tech: form.tech.filter((_, i) => i !== index),
    });
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    setForm({
      ...form,
      images: [...form.images, ...files],
    });
  };

  const removeImage = (index) => {
    setForm({
      ...form,
      images: form.images.filter((_, i) => i !== index),
    });
  };

  const addProject = async (e) => {
    e.preventDefault();

    const token = getToken();

    if (!token) {
      logoutUser();
      return;
    }

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("tech_stack", form.tech.join(", "));
      formData.append("github_link", form.github_link);
      formData.append("live_link", form.live_link);
      formData.append("features", "");

      form.images.forEach((image) => {
        formData.append("images", image);
      });

      await axios.post(
        `${import.meta.env.VITE_API_URL}/projects`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setForm({
        title: "",
        description: "",
        tech: [],
        github_link: "",
        live_link: "",
        images: [],
      });

      fetchProjects();
      alert("Project Added Successfully");
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        logoutUser();
      } else {
        alert("Failed to add project");
      }
    }
  };

  const deleteProject = async (id) => {
    const token = getToken();

    if (!token) {
      logoutUser();
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchProjects();
      alert("Project Deleted Successfully");
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        logoutUser();
      } else {
        alert("Failed to delete project");
      }
    }
  };

  return (
    <section className="admin-projects">
      <h1>Manage Projects</h1>

      <form onSubmit={addProject} className="project-form">
        <input
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <div className="tech-row">
          <input
            placeholder="Add Tech Stack"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
          />

          <button type="button" onClick={addTech}>
            Add
          </button>
        </div>

        <div className="tags">
          {form.tech.map((item, index) => (
            <span key={index}>
              {item}

              <button
                type="button"
                onClick={() => removeTech(index)}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <input
          type="file"
          multiple
          onChange={handleImages}
        />

        <div className="preview-images">
          {form.images.map((img, index) => (
            <div className="img-box" key={index}>
              <img
                src={URL.createObjectURL(img)}
                alt=""
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <input
          name="github_link"
          placeholder="GitHub Link"
          value={form.github_link}
          onChange={handleChange}
        />

        <input
          name="live_link"
          placeholder="Live Link"
          value={form.live_link}
          onChange={handleChange}
        />

        <button type="submit">
          Add Project
        </button>
      </form>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <small>{project.tech_stack}</small>

            <button
              className="delete-btn"
              onClick={() =>
                deleteProject(project.id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminProjects;