import React, { useEffect, useState } from "react";
import "./updatePassword.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  readUser,
  updatePassword,
} from "../../../redux/usersRedux/requestUser";
import bcrypt from "bcryptjs-react";
import { passwordIsValid } from "../../../constants/regex";

const UpdatePassword = () => {
  const userPassword = useSelector((state) => state.users.users.password);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isNewPasswordIsValid = passwordIsValid(newPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isPasswordValid = await bcrypt.compare(oldPassword, userPassword);
    if (!isPasswordValid) {
      alert("L'ancien mot de passe est incorrect.");
    } else if (!isNewPasswordIsValid) {
      alert("le nouveau mot passe est incorrect");
    } else if (newPassword !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
    } else {
      dispatch(updatePassword(newPassword));
    }
  };

  return (
    <div className="passwordForm">
      <h2>Modification mot de passe</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="oldPassword">Ancien mot de passe</label>
          <input
            type="password"
            name="oldPassword"
            value={oldPassword}
            required
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            pattern={isNewPasswordIsValid}
            required
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmation mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <Link to="/profile">
            <button className="btn">Annuler</button>
          </Link>
          <input type="submit" value="Valider" />
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
