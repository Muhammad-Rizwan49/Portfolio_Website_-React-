import "./AdminProfile.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminProfile() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    whatsapp: "",
    github: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/admin-profile");
      setForm({
        full_name: res.data.full_name || "",
        email: res.data.email || "",
        whatsapp: res.data.whatsapp || "",
        github: res.data.github || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:5000/admin-profile", form);
      alert("Profile updated successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to update profile");
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();

    if (passwordForm.new_password !== passwordForm.confirm_password) {
      alert("New password and confirm password do not match");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:5000/change-password", {
        old_password: passwordForm.old_password,
        new_password: passwordForm.new_password,
      });

      alert("Password changed successfully");

      setPasswordForm({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to change password");
    }
  };

  return (
    <section className="admin-profile">
      <h1>Admin Profile</h1>

      <form className="profile-form" onSubmit={saveProfile}>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={form.whatsapp}
          onChange={handleChange}
        />

        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          value={form.github}
          onChange={handleChange}
        />

        <button type="submit">Save Profile</button>
      </form>

      <form className="password-form" onSubmit={changePassword}>
        <h2>Change Password</h2>

        <input
          type="password"
          name="old_password"
          placeholder="Current Password"
          value={passwordForm.old_password}
          onChange={handlePasswordChange}
        />

        <input
          type="password"
          name="new_password"
          placeholder="New Password"
          value={passwordForm.new_password}
          onChange={handlePasswordChange}
        />

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm New Password"
          value={passwordForm.confirm_password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Change Password</button>
      </form>
    </section>
  );
}

export default AdminProfile;