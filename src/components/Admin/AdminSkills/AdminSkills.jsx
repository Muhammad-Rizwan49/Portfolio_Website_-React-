import "./AdminSkills.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminSkills() {
  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({
    name: "",
    level: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/skills");
      setSkills(res.data);
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

  const addSkill = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.level.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (Number(form.level) < 1 || Number(form.level) > 100) {
      alert("Level must be between 1 and 100");
      return;
    }

    try {
      await axios.post(
        "http://127.0.0.1:5000/skills",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setForm({ name: "", level: "" });
      fetchSkills();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSkill = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:5000/skills/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchSkills();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="admin-skills">
      <h1>Manage Skills</h1>

      <form onSubmit={addSkill} className="skill-form">
        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="level"
          placeholder="Level %"
          min="1"
          max="100"
          value={form.level}
          onChange={handleChange}
        />

        <button type="submit">Add Skill</button>
      </form>

      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <span>{skill.name} - {skill.level}%</span>

            <button onClick={() => deleteSkill(skill.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminSkills;