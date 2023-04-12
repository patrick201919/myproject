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
    <main>
      {editUser ? (
        <section className="readProfileForm">
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
        </section>
      ) : (
        <section>
          <article>
            <ul>
              <li>
                <strong>Prémon</strong> <span>{user.firstName}</span>
              </li>
              <li>
                <strong>Nom</strong>
                <span>{user.name}</span>
              </li>
              <li>
                <strong>Date de naissance</strong>
                <span>{user.birthDay}</span>
              </li>
              <li>
                <strong>Votre adresse</strong>
                <span>{user.address}</span>
              </li>
              <li>
                <strong> Code postal</strong>
                <span> {user.postCode}</span>
              </li>
              <li>
                <strong>Ville</strong>
                <span> {user.city}</span>
              </li>
              <li>
                <strong>Pays</strong>
                <span> {user.country}</span>
              </li>
              <li>
                <strong>Téléphone</strong>
                <span> {user.telephone}</span>
              </li>
              <li>
                <strong>Votre email</strong>
                <span> {user.email}</span>
              </li>
              <li>
                <strong>Statut</strong>
                <span>{user.role}</span>
              </li>
            </ul>
            <button onClick={handleEditClick}>Modifier</button>
            <button onClick={handleDeleteClick}>Supprimer</button>
          </article>
        </section>
      )}
    </main>
  );
};

export default ReadProfile;
