// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllUser } from "../../redux/reduxUserSlice";
// import {
//   deleteUser,
//   // readUser,
//   // updateUser,
// } from "../../redux/usersRedux/usersApi";
// import { updateUser } from "../../redux/usersRedux/usersApi";
// const Test = () => {
//   const { useres } = useSelector((state) => state.useres);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllUser());
//   }, [dispatch]);

//   const [state, setState] = useState(useres);
//   console.log(state);
//   const [editUser, setEditUser] = useState(false);

//   useEffect(() => {
//     setState(useres);
//   }, [useres]);

//   const handleChange = (key, value) => {
//     setState({ ...state, [key]: value });
//     console.log(state);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateUser(state));
//     setEditUser(false);
//   };

//   // const handleDeleteClick = () => {
//   //   dispatch(deleteUser(usere.id));
//   //   //redirection home page
//   // };
//   const handleCancelEdit = () => {
//     setEditUser(false);
//   };
//   const handleEditClick = () => {
//     setEditUser(true);
//   };

//   return (
//     <div>
//       {editUser && editUser.id === useres.id ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Prénom"
//             value={state.firstName}
//             onChange={(e) => handleChange("firstName", e.target.value)}
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Nom"
//             value={state.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//           />
//           <input
//             type="date"
//             name="birthDay"
//             placeholder="Date de naissance"
//             value={state.birthDay}
//             onChange={(e) => handleChange("birthDay", e.target.value)}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Adresse"
//             value={state.address}
//             onChange={(e) => handleChange("address", e.target.value)}
//           />

//           <input
//             type="text"
//             name="postCode"
//             placeholder="Code postal"
//             value={state.postCode}
//             onChange={(e) => handleChange("postCode", e.target.value)}
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="Ville"
//             value={state.city}
//             onChange={(e) => handleChange("city", e.target.value)}
//           />
//           <input
//             type="text"
//             name="country"
//             placeholder="Pays"
//             value={state.country}
//             onChange={(e) => handleChange("country", e.target.value)}
//           />
//           <input
//             type="text"
//             name="telephone"
//             placeholder="Téléphone"
//             value={state.telephone}
//             onChange={(e) => handleChange("telephone", e.target.value)}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={state.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//           />
//           <button onClick={handleCancelEdit}>Annler</button>
//           <button type="submit">Enregistrer</button>
//         </form>
//       ) : (
//         <div>
//           {useres.map((usere) => (
//             <ul key={usere.id}>
//               <li>{usere.firstName}</li>
//               <li>{usere.name}</li>
//               <li>{usere.birthDay}</li>
//               <li>{usere.address}</li>
//               <li>{usere.postCode}</li>
//               <li>{usere.city}</li>
//               <li>{usere.country}</li>
//               <li>{usere.telephone}</li>
//               <li>{usere.email}</li>
//               <li> {usere.id}</li>
//               <button onClick={handleEditClick}>modifier</button>
//               <button onClick={() => dispatch(deleteUser(usere.id))}>
//                 supprimer
//               </button>
//             </ul>
//           ))}
//         </div>
//         // <div>
//         //   <ul>
//         //     <li>{user.firstName}</li>
//         //     <li>{user.name}</li>
//         //     <li>{user.birthDay}</li>
//         //     <li>{user.address}</li>
//         //     <li>{user.postCode}</li>
//         //     <li>{user.city}</li>
//         //     <li>{user.country}</li>
//         //     <li>{user.telephone}</li>
//         //     <li>{user.email}</li>
//         //     <li>{user.id}</li>
//         //   </ul>
//         //   <button onClick={handleEditClick}>Modifier</button>
//         //   <button onClick={handleDeleteClick}>Supprimer</button>
//         // </div>
//       )}
//     </div>
//   );
// };

// export default Test;

// // const user = useSelector((state) => state.users.users);
// // const dispatch = useDispatch();

// // useEffect(() => {
// //   dispatch(readUser());
// // }, [dispatch]);

// // const [state, setState] = useState(user);
// // console.log(state);
// // const [editUser, setEditUser] = useState(false);

// // useEffect(() => {
// //   setState(user);
// // }, [user]);

// // const handleChange = (key, value) => {
// //   setState({ ...state, [key]: value });
// //   console.log(state);
// // };

// // const handleSubmit = (e) => {
// //   e.preventDefault();
// //   dispatch(updateUser(state));
// //   setEditUser(false);
// // };

// // const handleDeleteClick = () => {
// //   dispatch(deleteUser(user.id));
// //   //redirection home page
// // };
// // const handleCancelEdit = () => {
// //   setEditUser(false);
// // };
// // const handleEditClick = () => {
// //   setEditUser(true);
// // };

// // return (
// //   <div>
// //     {editUser ? (
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="firstName"
// //           placeholder="Prénom"
// //           value={state.firstName}
// //           onChange={(e) => handleChange("firstName", e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Nom"
// //           value={state.name}
// //           onChange={(e) => handleChange("name", e.target.value)}
// //         />
// //         <input
// //           type="date"
// //           name="birthDay"
// //           placeholder="Date de naissance"
// //           value={state.birthDay}
// //           onChange={(e) => handleChange("birthDay", e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           name="address"
// //           placeholder="Adresse"
// //           value={state.address}
// //           onChange={(e) => handleChange("address", e.target.value)}
// //         />

// //         <input
// //           type="text"
// //           name="postCode"
// //           placeholder="Code postal"
// //           value={state.postCode}
// //           onChange={(e) => handleChange("postCode", e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           name="city"
// //           placeholder="Ville"
// //           value={state.city}
// //           onChange={(e) => handleChange("city", e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           name="country"
// //           placeholder="Pays"
// //           value={state.country}
// //           onChange={(e) => handleChange("country", e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           name="telephone"
// //           placeholder="Téléphone"
// //           value={state.telephone}
// //           onChange={(e) => handleChange("telephone", e.target.value)}
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           value={state.email}
// //           onChange={(e) => handleChange("email", e.target.value)}
// //         />
// //         <button onClick={handleCancelEdit}>Annler</button>
// //         <button type="submit">Enregistrer</button>
// //       </form>
// //     ) : (
// //       <div>
// //         <ul>
// //           <li>{user.firstName}</li>
// //           <li>{user.name}</li>
// //           <li>{user.birthDay}</li>
// //           <li>{user.address}</li>
// //           <li>{user.postCode}</li>
// //           <li>{user.city}</li>
// //           <li>{user.country}</li>
// //           <li>{user.telephone}</li>
// //           <li>{user.email}</li>
// //           <li>{user.id}</li>
// //         </ul>
// //         <button onClick={handleEditClick}>Modifier</button>
// //         <button onClick={handleDeleteClick}>Supprimer</button>
// //       </div>
// //     )}
// //   </div>
// // );
