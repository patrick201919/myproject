// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUser } from "../../redux/reduxUserSlice";
// import { deleteUser } from "../../redux/usersRedux/usersApi";
// import { updateUser } from "../../redux/usersRedux/usersApi";

// const Teste = () => {
//   const { useres } = useSelector((state) => state.useres);
//   console.log("qsscqc", useres);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllUser());
//   }, [dispatch]);
//   const [userState, setUserState] = useState({
//     firstName: "",
//     name: "",
//     birthDay: "",
//     address: "",
//     postCode: "",
//     city: "",
//     country: "",
//     telephone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [editUser, setEditUser] = useState(true);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     dispatch(updateUser(userState));
//     setEditUser(true);
//   }

//   const handleInputChange = (e) => {
//     const { key, value } = e.target;
//     setUserState({ [key]: value });
//   };

//   const handleEditClick = (event) => {
//     setUserState(event.target.value);
//     setEditUser(false);
//   };

//   const handleCancelEdit = () => {
//     setEditUser(true);
//   };

//   return (
//     <div>
//       <h1>mes cordonnées</h1>
//       {useres && (
//         <main>
//           {editUser ? (
//             <div>
//               {useres.map((usere) => (
//                 <ul key={usere.id}>
//                   <li>{usere.firstName}</li>
//                   <li>{usere.name}</li>
//                   <li>{usere.birthDay}</li>
//                   <li>{usere.address}</li>
//                   <li>{usere.postCode}</li>
//                   <li>{usere.city}</li>
//                   <li>{usere.country}</li>
//                   <li>{usere.telephone}</li>
//                   <li>{usere.email}</li>
//                   <li> {usere.id}</li>
//                   <button onClick={handleEditClick}>modifier</button>
//                   <button onClick={() => dispatch(deleteUser())}>
//                     supprimer
//                   </button>
//                 </ul>
//               ))}
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Prénom"
//                   name="firstName"
//                   value={userState.firstName}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Nom"
//                   name="name"
//                   value={userState.name}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Date de naissance"
//                   name="birthDay"
//                   value={userState.birthDay}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="adresse"
//                   name="address"
//                   value={userState.address}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Code postal"
//                   name="postCode"
//                   value={userState.postCode}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Ville"
//                   name="city"
//                   value={userState.city}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Pays"
//                   name="country"
//                   value={userState.country}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Téléphone"
//                   name="telephone"
//                   value={userState.telephone}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   name="email"
//                   value={userState.email}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Mot de passe"
//                   name="password"
//                   value={userState.password}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirmer mot de passe"
//                   name="confirmPassword"
//                   required
//                   value={userState.confirmPassword}
//                   onChange={handleInputChange}
//                 />
//                 <button onClick={handleCancelEdit}>Annuler</button>
//                 <input type="submit" value="Enregister" />
//               </div>
//             </form>
//           )}
//         </main>
//       )}
//     </div>
//   );
// };
// //   const dispatch = useDispatch();
// //   // const { users } = useSelector((state) => state.users, action.payload);

// //   const [firstName, setFirstName] = useState("");
// //   const [name, setName] = useState("");
// //   const [birthDay, setBirthDay] = useState("");
// //   const [address, setAddress] = useState("");
// //   const [postCode, setPostCode] = useState("");
// //   const [city, setCity] = useState("");
// //   const [country, setCountry] = useState("");
// //   const [telephone, setTelephone] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const newUser = {
// //     firstName,
// //     name,
// //     birthDay,
// //     address,
// //     postCode,
// //     city,
// //     country,
// //     telephone,
// //     email,
// //     password,
// //     confirmPassword,
// //   };

// //   return (
// //     <div>
// //       <form>
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Prénom"
// //             required
// //             value={firstName}
// //             onChange={(e) => setFirstName(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Nom"
// //             required
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Date de naissance"
// //             required
// //             value={birthDay}
// //             onChange={(e) => setBirthDay(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="adresse"
// //             required
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Code postal"
// //             required
// //             value={postCode}
// //             onChange={(e) => setPostCode(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Ville"
// //             required
// //             value={city}
// //             onChange={(e) => setCity(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Pays"
// //             required
// //             value={country}
// //             onChange={(e) => setCountry(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Téléphone"
// //             required
// //             value={telephone}
// //             onChange={(e) => setTelephone(e.target.value)}
// //           />

// //           <input
// //             type="text"
// //             placeholder="Email"
// //             required
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />

// //           <input
// //             type="password"
// //             placeholder="Mot de passe"
// //             required
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Confirmer mot de passe"
// //             required
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //           />
// //           <button onClick={() => dispatch(getAllUser(newUser))}>Envoyer</button>
// //         </div>
// //       </form>
// //     </div>
// //   );

// export default Teste;

import React, { useState } from "react";
import "./teste.css";
const CarTypes = ["SUV", "Berline", "Citadine", "Cabriolet"];

const Teste = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [carType, setCarType] = useState("");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Destination: ", destination);
    console.log("Date: ", date);
    console.log("Time: ", time);
    console.log("Car Type: ", carType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={handleDestinationChange}
        />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <br />
      <label>
        Time:
        <input type="time" value={time} onChange={handleTimeChange} />
      </label>
      <br />
      <label>
        Car Type:
        <select value={carType} onChange={handleCarTypeChange}>
          <option value="">--Choisir un type de voiture--</option>
          {CarTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default Teste;
