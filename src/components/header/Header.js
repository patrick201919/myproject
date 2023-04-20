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
    localStorage.removeItem("token");
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
        <div className={`menuNavBar ${showBurgerMenu ? "active" : ""}`}>
          {role || roles !== USER_ROLE.admin ? (
            (console.log("roles", roles),
            (
              <>
                <Link to="" onClick={handleLinkClick}>
                  Nos véhicules
                </Link>
                <Link
                  to={islogout === null ? "/" : "/booking"}
                  onClick={handleLinkClick}
                >
                  Mes réservations
                </Link>
                <Link
                  to={islogout === null ? "/" : "/profile"}
                  onClick={handleLinkClick}
                >
                  Mon compte
                </Link>
              </>
            ))
          ) : (
            <>
              <Link to="/bookings" onClick={handleLinkClick}>
                Les réservations
              </Link>
              <Link to="/profiles" onClick={handleLinkClick}>
                Les utilisateurs
              </Link>
              <Link to="/vehicles" onClick={handleLinkClick}>
                Les véhicules
              </Link>
              <Link>Ma réservation</Link>
              {/* <Link to="/profile" onClick={handleLinkClick}>
                Mon compte
              </Link> */}
            </>
          )}

          <>
            {islogout === null ? (
              <Link to="/login" onClick={handleLinkClick}>
                Connexion
              </Link>
            ) : (
              <Link onClick={handleLogout}>Déconnexion</Link>
            )}
          </>
        </div>
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
