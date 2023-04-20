import React, { useEffect, useState } from "react";
import "./readProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  readUser,
  updateUser,
} from "../../../redux/usersRedux/requestUser";
import { Link } from "react-router-dom";
import {
  emailIsValid,
  // passwordIsValid,
  phoneIsValid,
} from "../../../constants/regex";
import { USER_ROLE } from "../../../constants/userConstant";
const ReadProfile = () => {
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  const [profile, setProfile] = useState(user);
  const [editUser, setEditUser] = useState(false);

  useEffect(() => {
    setProfile(user);
  }, [user]);

  const handleChange = (key, value) => {
    setProfile({ ...profile, [key]: value });
  };

  const isemailIsValid = emailIsValid(profile.email);
  const isphoneIsValid = phoneIsValid(profile.telephone);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(profile));
    if (!isemailIsValid || !isphoneIsValid) {
      alert("l'email ou le numéro de téléphone est incorrect");
    }

    setEditUser(false);
  };

  const handleDeleteClick = () => {
    dispatch(deleteUser(user.id));
    window.location.href = "/";
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
        <section className="editProfileForm">
          <h2>Modifier vos informations </h2>
          <form onSubmit={handleSubmit} className="editForm">
            <div>
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={profile.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                placeholder="votre age"
                value={profile.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="birthDay">Date de naissance</label>
              <input
                type="date"
                name="birthDay"
                placeholder="Date de naissance"
                value={profile.birthDay}
                onChange={(e) => handleChange("birthDay", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address">Votre adresse</label>
              <input
                type="text"
                name="address"
                placeholder="Adresse"
                value={profile.address}
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
                value={profile.postCode}
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
                value={profile.city}
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
                value={profile.country}
                required
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="telephone">Numéro de téléphone</label>
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                // pattern={isPhoneValid}
                value={profile.telephone}
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
                value={profile.email}
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <span className="titleLicense">Permis de conduire</span>
            <div>
              <label htmlFor="drivingLicenseNumber">N° de permis</label>
              <input
                type="text"
                name="drivingLicenseNumber"
                placeholder="N° de permis"
                value={profile.drivingLicenseNumber}
                onChange={(e) =>
                  handleChange("drivingLicenseNumber", e.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="permitIssuedOn">Permis délivré le</label>
              <input
                type="date"
                name="permitIssuedOn"
                placeholder="Date"
                value={profile.permitIssuedOn}
                onChange={(e) => handleChange("permitIssuedOn", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="licenseIssuedBy">Permis délivré par</label>
              <input
                type="text"
                name="licenseIssuedBy"
                placeholder="Permis délivré par"
                value={profile.licenseIssuedBy}
                onChange={(e) =>
                  handleChange("licenseIssuedBy", e.target.value)
                }
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
        <section className="containerPersonalInfo">
          <h2>Vos informations personnelles</h2>
          <article className="articlePeronalInfo">
            <article className="PersonalInfo">
              <p>
                <strong>Prémon : </strong> <span>{user.firstName}</span>
              </p>
              <p>
                <strong>Nom : </strong>
                <span>{user.name}</span>
              </p>
              <p>
                <strong>Age : </strong>
                <span>{user.age} ans</span>
              </p>
              <p>
                <strong>Date de naissance : </strong>
                <span>{user.birthDay}</span>
              </p>
              <p>
                <strong>Votre adresse : </strong>
                <span>{user.address}</span>
              </p>
              <p>
                <strong> Code postal : </strong>
                <span> {user.postCode}</span>
              </p>
              <p>
                <strong>Ville : </strong>
                <span> {user.city}</span>
              </p>
              <p>
                <strong>Pays : </strong>
                <span> {user.country}</span>
              </p>
              <p>
                <strong>Téléphone : </strong>
                <span> {user.telephone}</span>
              </p>
              <p>
                <strong>Votre email : </strong>
                <span> {user.email}</span>
              </p>
              <p>
                <strong>Statut : </strong>
                {user.role === USER_ROLE.member
                  ? "Membre"
                  : user.role === USER_ROLE.admin
                  ? "Admin"
                  : "Autre"}
              </p>
            </article>
            <article className="personalLicense">
              <h3 className="titleLicense">Permis de conduire</h3>
              <article>
                <p>
                  <strong>N° de permis de conduire : </strong>
                  <span>{user.drivingLicenseNumber}</span>
                </p>
                <p>
                  <strong>Permis délivré le : </strong>
                  <span>{user.permitIssuedOn}</span>
                </p>
                <p>
                  <strong>Permis délivré par : </strong>
                  <span>{user.licenseIssuedBy}</span>
                </p>
              </article>
            </article>
            <button className="btn" onClick={handleEditClick}>
              Modifier
            </button>
            <button className="btn" onClick={handleDeleteClick}>
              Supprimer
            </button>
          </article>
        </section>
      )}
    </main>
  );
};

export default ReadProfile;
