import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">Muhammad Rizwan</h2>

      <p className="footer-text">
        Software Engineer | Flutter Developer | UI/UX Designer
      </p>

      <div className="social-links">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="mailto:yourmail@gmail.com">Email</a>
        <a href="https://wa.me/923000000000" target="_blank">WhatsApp</a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Muhammad Rizwan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;