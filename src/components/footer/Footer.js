import React from "react";
import "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoFooter">
        <Link to="/">
          <img src="/logo/logoElectroDrive1.png" alt="logo electroDrive" />
        </Link>
      </div>
      <nav>
        <div className="navFooter">
          <Link to="">À propos</Link>
          <Link to="">Politique de confidentialié</Link>
          <Link to="">Mentions légales</Link>
          <Link to="">Nous contacter</Link>
        </div>
      </nav>
      <p className="copyright">Copyright &copy; 2022 ElectroDrive</p>
    </footer>
  );
};

export default Footer;
