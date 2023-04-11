import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/usersRedux/requestUser";

const CreateProfile = () => {
  const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.users, action.payload);

  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const newUser = {
    firstName,
    name,
    birthDay,
    address,
    postCode,
    city,
    country,
    telephone,
    email,
    password,
    confirmPassword,
  };

  const handleSubmit = () => {
    dispatch(createUser(newUser));
  };

  return (
    <div className="createProfileForm">
      <h2>Créer votre compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Prénom</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Nom</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Date de naissance</label>
          <input
            type="date"
            required
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Adresse</label>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Code postal</label>
          <input
            type="text"
            required
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Ville</label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Pays</label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Télephone</label>
          <input
            type="tel"
            required
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Mot de passe</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Confirmation mot de passe</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default CreateProfile;
