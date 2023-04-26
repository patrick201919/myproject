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
        <ul className="navFooter">
          <li>
            <Link to="">À propos</Link>
          </li>
          <li>
            <Link to="">Politique de confidentialié</Link>
          </li>
          <li>
            <Link to="">Mentions légales</Link>
          </li>
          <li>
            <Link to="">Nous contacter</Link>
          </li>
        </ul>
      </nav>
      <p className="copyright">Copyright &copy; 2022 ElectroDrive</p>
    </footer>
  );
};

export default Footer;
