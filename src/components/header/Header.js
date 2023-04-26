import React, { useEffect, useState } from "react";
import "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/usersRedux/authSlice";
import { USER_ROLE } from "../../constants/userConstant";
import { readUser } from "../../redux/usersRedux/requestUser";

const Header = () => {
  const islogout = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const roles = useSelector((state) => state.users.users.role);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleClickBurger = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };
  const handleLinkClick = () => {
    setShowBurgerMenu(false);
  };

  return (
    <header className="header">
      <div className="containerLogo">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/logo/logoElectroDrive.png" alt="logo electroDrive" />
          </Link>
        </div>
        <p>ElectroDrive</p>
      </div>
      <nav className="navBar">
        <ul className={`menuNavBar ${showBurgerMenu ? "active" : ""}`}>
          {parseInt(role || roles) !== USER_ROLE.admin ? (
            (console.log("roles", roles),
            (
              <>
                <li>
                  <Link to="/models" onClick={handleLinkClick}>
                    Nos véhicules
                  </Link>
                </li>
                <li>
                  <Link
                    to={islogout === null ? "/" : "/booking"}
                    onClick={handleLinkClick}
                  >
                    Mes réservations
                  </Link>
                </li>
                <li>
                  <Link
                    to={islogout === null ? "/" : "/profile"}
                    onClick={handleLinkClick}
                  >
                    Mon compte
                  </Link>
                </li>
              </>
            ))
          ) : (
            <>
              <li>
                <Link
                  to={islogout === null ? "/" : "/bookings"}
                  onClick={handleLinkClick}
                >
                  Les réservations
                </Link>
              </li>
              <li>
                <Link
                  to={islogout === null ? "/" : "/profiles"}
                  onClick={handleLinkClick}
                >
                  Les utilisateurs
                </Link>
              </li>
              <li>
                <Link to="/vehicles" onClick={handleLinkClick}>
                  Les véhicules
                </Link>
              </li>
              <li>
                <Link
                  to={islogout === null ? "/" : "/profile"}
                  onClick={handleLinkClick}
                >
                  Mon compte
                </Link>
              </li>
            </>
          )}

          <>
            {islogout === null ? (
              <li>
                <Link to="/login" onClick={handleLinkClick}>
                  Connecter / S'inscrire
                </Link>
              </li>
            ) : (
              <li>
                <Link onClick={handleLogout}>Déconnexion</Link>
              </li>
            )}
          </>
        </ul>
        <div
          className={`burger ${showBurgerMenu ? "active" : ""}`}
          onClick={handleClickBurger}
        >
          <span className="afterBurger"></span>
          <span className="middleBurger"></span>
          <span className="beforeBurger"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// const handleLogout = () => {
//   const Redirect = () => {
//     navigate("/");
//   };
//   // localStorage.removeItem("token");
//   dispatch(logout(Redirect()));
// };
