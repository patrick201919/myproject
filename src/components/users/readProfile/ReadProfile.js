import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  readUser,
  updateUser,
} from "../../../redux/usersRedux/requestUser";
import { Link } from "react-router-dom";

const ReadProfile = () => {
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  const [state, setState] = useState(user);
  console.log(state);
  const [editUser, setEditUser] = useState(false);

  useEffect(() => {
    setState(user);
  }, [user]);

  const handleChange = (key, value) => {
    setState({ ...state, [key]: value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(state));
    setEditUser(false);
  };

  const handleDeleteClick = () => {
    dispatch(deleteUser(user.id));
    //redirection home page
  };
  const handleCancelEdit = () => {
    setEditUser(false);
  };
  const handleEditClick = () => {
    setEditUser(true);
  };

  return (
    <div>
      {editUser ? (
        <div className="readProfileForm">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={state.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={state.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="birthDay">Date de naissance</label>
              <input
                type="date"
                name="birthDay"
                placeholder="Date de naissance"
                value={state.birthDay}
                onChange={(e) => handleChange("birthDay", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address">Votre adresse</label>
              <input
                type="text"
                name="address"
                placeholder="Adresse"
                value={state.address}
                required
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="postCode">Code postal</label>
              <input
                type="text"
                name="postCode"
                placeholder="Code postal"
                value={state.postCode}
                required
                onChange={(e) => handleChange("postCode", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                name="city"
                placeholder="Ville"
                value={state.city}
                required
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="country">Pays</label>
              <input
                type="text"
                name="country"
                placeholder="Pays"
                value={state.country}
                required
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="telephones">Numéro de téléphone</label>
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                value={state.telephone}
                required
                onChange={(e) => handleChange("telephone", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Votre email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={state.email}
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <Link to="/password" className="passwordProfile">
                Modifier votre mot de passe
              </Link>
            </div>
            <div>
              <button className="btn" onClick={handleCancelEdit}>
                Annuler
              </button>
              <input type="submit" value="Enregistrer" />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <ul>
            <li>Prémon : {user.firstName}</li>
            <li>Nom : {user.name}</li>
            <li>Date de naissance : {user.birthDay}</li>
            <li>votre adresse : {user.address}</li>
            <li> Code postal : {user.postCode}</li>
            <li>Ville : {user.city}</li>
            <li>Pays : {user.country}</li>
            <li>Téléphone : {user.telephone}</li>
            <li> votre mail : {user.email}</li>
            <li>{user.id}</li>
          </ul>
          <button onClick={handleEditClick}>Modifier</button>
          <button onClick={handleDeleteClick}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default ReadProfile;
