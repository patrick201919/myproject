import React, { useState } from "react";
import "./createProfile.module.scss";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/usersRedux/requestUser";

const CreateProfile = () => {
  const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.users, action.payload);

  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [drivingLicenseNumber, setDrivingLicenseNumber] = useState("");
  const [permitIssuedOn, setPermitIssuedOn] = useState("");
  const [licenseIssuedBy, setLicenseIssuedBy] = useState("");

  const newUser = {
    firstName,
    name,
    age,
    birthDay,
    address,
    postCode,
    city,
    country,
    telephone,
    email,
    password,
    confirmPassword,
    drivingLicenseNumber,
    permitIssuedOn,
    licenseIssuedBy,
  };

  const handleSubmit = () => {
    dispatch(createUser(newUser));
  };

  return (
    <div className="createProfileForm">
      <h2>Créer votre compte</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthDay">Date de naissance</label>
          <input
            type="date"
            id="birthDay"
            name="birthDay"
            required
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Adresse</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="postCode">Code postal</label>
          <input
            type="text"
            id="postCode"
            name="postCode"
            required
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">Pays</label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telephone">Télephone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmation mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <span className="titleLicense">Permis de conduire</span>
        <div>
          <label htmlFor="drivingLicenseNumber">N° de permis</label>
          <input
            type="text"
            id="drivingLicenseNumber"
            name="drivingLicenseNumber"
            value={drivingLicenseNumber}
            onChange={(e) => setDrivingLicenseNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="permitIssuedOn">Permis délivré le</label>
          <input
            type="date"
            id="permitIssuedOn"
            name="permitIssuedOn"
            value={permitIssuedOn}
            onChange={(e) => setPermitIssuedOn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="licenseIssuedBy">Permis délivré par</label>
          <input
            type="text"
            id="licenseIssuedBy"
            name="licenseIssuedBy"
            value={licenseIssuedBy}
            onChange={(e) => setLicenseIssuedBy(e.target.value)}
          />
        </div>
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default CreateProfile;
