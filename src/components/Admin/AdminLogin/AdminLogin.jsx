import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/login",
        form
      );

      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);

        setMessage("Login successful ✔");

        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 800);
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      console.log(error);
      setMessage("Invalid username or password");
    }

    setLoading(false);
  };

  return (
    <section className="admin-login">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </section>
  );
}

export default AdminLogin;