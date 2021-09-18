import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Darnell Armas</h1>
        <p>Developer</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>darnellsanchez2011@gmail.com</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Darnell</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/DarArmas" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
