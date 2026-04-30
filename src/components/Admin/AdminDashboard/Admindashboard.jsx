import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h1>Admin Dashboard</h1>

        <button className="card" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard-grid">
        <div
          className="card"
          onClick={() => navigate("/admin-projects")}
        >
          <h2>Manage Projects</h2>
          <p>Add, edit and delete portfolio projects.</p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/admin-skills")}
        >
          <h2>Manage Skills</h2>
          <p>Update technical skills and expertise.</p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/admin-about")}
        >
          <h2>Manage About</h2>
          <p>Edit biography, experience and personal details.</p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/admin-messages")}
        >
          <h2>Client Messages</h2>
          <p>View portfolio contact form inquiries and leads.</p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/admin-profile")}
        >
          <h2>Admin Profile</h2>
          <p>Update email, WhatsApp, GitHub and password.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;