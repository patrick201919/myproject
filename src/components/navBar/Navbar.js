import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Nos véhicules</Link>
      <Link>Ma réservation</Link>
      <Link to="/profile">Mon compte</Link>
      <p>
        Bonjour, <Link to="/login">Identifier-vous</Link>;
      </p>
    </nav>
  );
};

export default Navbar;
