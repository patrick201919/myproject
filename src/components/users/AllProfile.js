import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUser,
  updateUser,
} from "../../redux/usersRedux/requestUser";

const AllProfile = () => {
  const { users } = useSelector((state) => state.users);
  console.log("qsscqc", users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  const [userState, setUserState] = useState({
    firstName: "",
    name: "",
    birthDay: "",
    address: "",
    postCode: "",
    city: "",
    country: "",
    telephone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [editUser, setEditUser] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateUser(userState));
    setEditUser(true);
  }

  const handleInputChange = (e) => {
    const { key, value } = e.target;
    setUserState({ [key]: value });
  };

  const handleEditClick = (event) => {
    setUserState(event.target.value);
    setEditUser(false);
  };

  const handleCancelEdit = () => {
    setEditUser(true);
  };

  return (
    <div>
      <h1>mes cordonnées</h1>
      {users && (
        <main>
          {editUser ? (
            <div>
              {users.map((user) => (
                <ul key={user.id}>
                  <li>{user.firstName}</li>
                  <li>{user.name}</li>
                  <li>{user.birthDay}</li>
                  <li>{user.address}</li>
                  <li>{user.postCode}</li>
                  <li>{user.city}</li>
                  <li>{user.country}</li>
                  <li>{user.telephone}</li>
                  <li>{user.email}</li>
                  <li> {user.id}</li>
                  <button onClick={handleEditClick}>modifier</button>
                  <button onClick={() => dispatch(deleteUser())}>
                    supprimer
                  </button>
                </ul>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Prénom"
                  name="firstName"
                  value={userState.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Nom"
                  name="name"
                  value={userState.name}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Date de naissance"
                  name="birthDay"
                  value={userState.birthDay}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="adresse"
                  name="address"
                  value={userState.address}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Code postal"
                  name="postCode"
                  value={userState.postCode}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Ville"
                  name="city"
                  value={userState.city}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Pays"
                  name="country"
                  value={userState.country}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Téléphone"
                  name="telephone"
                  value={userState.telephone}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={userState.email}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  value={userState.password}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  placeholder="Confirmer mot de passe"
                  name="confirmPassword"
                  required
                  value={userState.confirmPassword}
                  onChange={handleInputChange}
                />
                <button onClick={handleCancelEdit}>Annuler</button>
                <input type="submit" value="Enregister" />
              </div>
            </form>
          )}
        </main>
      )}
    </div>
  );
};

export default AllProfile;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getUsers,
//   // getUsers,
//   // deleteUser,
//   updateUser,
// } from "../../redux/usersRedux/usersApi";

// const AllProfile = () => {
//   const { users } = useSelector((state) => state.users);
//   console.log(users); // Récupère la liste d'utilisateurs dans le state
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUsers());
//   }, [dispatch]);

//   function UserForm({ user }) {
//     const [firstName, setFirstName] = useState(user.firstName);
//     const [name, setName] = useState(user.name);
//     const [birthDay, setBirthDay] = useState(user.birthDay);

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const updatedUser = {
//         id: user.id,
//         firstName,
//         name,
//         birthDay,
//       };
//       dispatch(updateUser(updatedUser));
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Prénom"
//           value={firstName}
//           onChange={(event) => setFirstName(event.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Nom"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Date de naissance"
//           value={birthDay}
//           onChange={(event) => setBirthDay(event.target.value)}
//         />
//         <button type="submit">Enregistrer</button>
//       </form>
//     );
//   }

//   return (
//     <div>
//       <h1>Liste des utilisateurs</h1>
//       {users.map((user) => (
//         <UserForm key={user.id} user={user}>
//       ))}
//       <h1>Liste des utilisateurs</h1>
//     </div>
//   );
// };
