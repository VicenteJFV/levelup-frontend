import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ marginTop: "auto" }}>
      <div className="container text-center">
        <small style={{ fontFamily: "Orbitron, sans-serif" }}>
          © {new Date().getFullYear()} Level-Up Gamer — Proyecto académico DUOC
          UC
        </small>
      </div>
    </footer>
  );
};

export default Footer;
