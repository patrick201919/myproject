import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { readUser } from "../../../redux/usersRedux/requestUser";
import bcrypt from "bcryptjs";

const UpdatePassword = () => {
  const userPassword = useSelector((state) => state.users.users.password);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  console.log("paqsCQC", userPassword);
  // const [password, setPassword] = useState(userPassword);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formPassword = {
    oldPassword,
    newPassword,
    confirmPassword,
  };

  const handleSubmit = async (e) => {
    e.preventdefault();
    const isPasswordValid = await bcrypt.compare(oldPassword, userPassword);

    console.log("mot de userP", userPassword);
    console.log("ancien tapé", oldPassword);
    if (!isPasswordValid) {
      alert("l'ancien mot de passe est incorrect");
    }
    // if (setOldPassword !== password) {
    //   alert("l'ancien mot de passe est incorrect");
    // }
    //  if (userState.password !== userState.confirmPassword) {
    // //   alert("Les mots de passe saisis ne sont pas identiques.");
    // //   return;
    // // }
    dispatch(UpdatePassword(formPassword));
  };
  return (
    <div className="passwordForm">
      <h2>Modification mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Ancien mot de passe</label>
          <input
            type="password"
            value={oldPassword}
            required
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            value={newPassword}
            required
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmation mot de passe</label>
          <input
            type="password"
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
