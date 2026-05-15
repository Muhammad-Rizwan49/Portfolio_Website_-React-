import "./AdminAbout.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminAbout() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    highlight_word: "",
    description: "",

    exp_years: "",
    exp_text: "",

    projects_done: "",
    projects_text: "",

    focus_percent: "",
    focus_text: "",

    card1_title: "",
    card1_desc: "",

    card2_title: "",
    card2_desc: "",

    card3_title: "",
    card3_desc: "",
  });

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/about`
      );

      if (res.data) {
        setForm((prev) => ({
          ...prev,
          ...res.data,
        }));
      }
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

  const saveAbout = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/about`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("About Section Updated Successfully");
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/admin-login");
      } else {
        alert("Failed To Save");
      }
    }
  };

  return (
    <section className="admin-about">
      <h1>Manage About Section</h1>

      <form onSubmit={saveAbout} className="about-form">

        <input
          name="title"
          placeholder="Main Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="highlight_word"
          placeholder="Highlight Word"
          value={form.highlight_word}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="exp_years"
          placeholder="Experience Value"
          value={form.exp_years}
          onChange={handleChange}
        />

        <input
          name="exp_text"
          placeholder="Experience Text"
          value={form.exp_text}
          onChange={handleChange}
        />

        <input
          name="projects_done"
          placeholder="Projects Value"
          value={form.projects_done}
          onChange={handleChange}
        />

        <input
          name="projects_text"
          placeholder="Projects Text"
          value={form.projects_text}
          onChange={handleChange}
        />

        <input
          name="focus_percent"
          placeholder="Focus Value"
          value={form.focus_percent}
          onChange={handleChange}
        />

        <input
          name="focus_text"
          placeholder="Focus Text"
          value={form.focus_text}
          onChange={handleChange}
        />

        <input
          name="card1_title"
          placeholder="Card 1 Title"
          value={form.card1_title}
          onChange={handleChange}
        />

        <textarea
          name="card1_desc"
          placeholder="Card 1 Description"
          value={form.card1_desc}
          onChange={handleChange}
        />

        <input
          name="card2_title"
          placeholder="Card 2 Title"
          value={form.card2_title}
          onChange={handleChange}
        />

        <textarea
          name="card2_desc"
          placeholder="Card 2 Description"
          value={form.card2_desc}
          onChange={handleChange}
        />

        <input
          name="card3_title"
          placeholder="Card 3 Title"
          value={form.card3_title}
          onChange={handleChange}
        />

        <textarea
          name="card3_desc"
          placeholder="Card 3 Description"
          value={form.card3_desc}
          onChange={handleChange}
        />

        <button type="submit">Save Changes</button>

      </form>
    </section>
  );
}

export default AdminAbout;