import "./Footer.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const [profile, setProfile] = useState({
    github: "",
    email: "",
    whatsapp: "",
    full_name: "Muhammad Rizwan",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:5000/admin-profile"
      );

      setProfile({
        github: res.data.github || "",
        email: res.data.email || "",
        whatsapp: res.data.whatsapp || "",
        full_name:
          res.data.full_name || "Muhammad Rizwan",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="footer">
      <h2 className="footer-logo">
        {profile.full_name}
      </h2>

      <p className="footer-text">
        Software Engineer | Flutter Developer |
        UI/UX Designer
      </p>

      <div className="social-links">
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {profile.email && (
          <a href={`mailto:${profile.email}`}>
            Email
          </a>
        )}

        {profile.whatsapp && (
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        )}
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()}{" "}
        {profile.full_name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;