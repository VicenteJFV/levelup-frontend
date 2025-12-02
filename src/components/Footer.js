import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <small>
          © {new Date().getFullYear()} Level-Up Gamer — Proyecto académico DUOC
          UC
        </small>
      </div>
    </footer>
  );
};

export default Footer;
