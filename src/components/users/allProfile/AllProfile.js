import React, { useEffect, useState } from "react";
import "./allProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUser,
  updateUserAdmin,
} from "../../../redux/usersRedux/requestUser";
import { USER_ROLE } from "../../../constants/userConstant";

const AllProfile = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    if (users.length > 0) {
      setAllUser(users);
    }
  }, [users]);

  const handleChange = (id, key, value) => {
    const updatedAllUser = allUser.map((user) => {
      if (user.id === id) {
        return { ...user, [key]: value };
      }
      return user;
    });
    setAllUser(updatedAllUser);
  };

  return (
    <section className="containerAllUser">
      <h2>Informations des utilisateurs</h2>
      <main>
        {Array.isArray(allUser) &&
          allUser.map((user) => (
            <form className="formAllUser" key={user.id}>
              <div>
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Prénom"
                  name="firstName"
                  value={user.firstName}
                  onChange={(e) =>
                    handleChange(user.id, "firstName", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nom"
                  name="name"
                  value={user.name}
                  required
                  onChange={(e) =>
                    handleChange(user.id, "name", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="votre age"
                  value={user.age}
                  onChange={(e) => handleChange(user.id, "age", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="birthDay">Date de naissance</label>
                <input
                  type="date"
                  id="birthDay"
                  name="birthDay"
                  placeholder="Date de naissance"
                  value={user.birthDay}
                  onChange={(e) =>
                    handleChange(user.id, "birthDay", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  id="address"
                  placeholder="adresse"
                  name="address"
                  value={user.address}
                  required
                  onChange={(e) =>
                    handleChange(user.id, "address", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="postCode">Code postal</label>
                <input
                  type="text"
                  id="postCode"
                  placeholder="Code postal"
                  name="postCode"
                  value={user.postCode}
                  required
                  onChange={(e) =>
                    handleChange(user.id, "postCode", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="city">Ville</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Ville"
                  name="city"
                  value={user.city}
                  required
                  onChange={(e) =>
                    handleChange(user.id, "city", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="country">Pays</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Pays"
                  name="country"
                  value={user.country}
                  required
                  onChange={(e) =>
                    handleChange(user.id, "country", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="text"
                  id="telephone"
                  placeholder="Téléphone"
                  name="telephone"
                  value={user.telephone}
                  required
                  onChange={(e) =>
                    handleChange(user.id, "telephone", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="role">Rôle utilisateur</label>
                <select
                  name="role"
                  id="role"
                  value={user.role}
                  onChange={(e) =>
                    handleChange(user.id, "role", e.target.value)
                  }
                >
                  <option value={USER_ROLE.admin}>Admin</option>
                  <option value={USER_ROLE.member}>Membre</option>
                </select>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  required
                  onChange={(e) =>
                    handleChange(user.id, "email", e.target.value)
                  }
                />
              </div>
              <span className="titleLicense">Permis de conduire</span>
              <div>
                <label htmlFor="drivingLicenseNumber">N° de permis</label>
                <input
                  type="text"
                  id="drivingLicenseNumber"
                  name="drivingLicenseNumber"
                  placeholder="N° de permis"
                  value={user.drivingLicenseNumber}
                  onChange={(e) =>
                    handleChange(
                      user.id,
                      "drivingLicenseNumber",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label htmlFor="permitIssuedOn">Permis délivré le</label>
                <input
                  type="date"
                  id="permitIssuedOn"
                  name="permitIssuedOn"
                  placeholder="Date"
                  value={user.permitIssuedOn}
                  onChange={(e) =>
                    handleChange(user.id, "permitIssuedOn", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="licenseIssuedBy">Permis délivré par</label>
                <input
                  type="text"
                  id="licenseIssuedBy"
                  name="licenseIssuedBy"
                  placeholder="Permis délivré par"
                  value={user.licenseIssuedBy}
                  onChange={(e) =>
                    handleChange(user.id, "licenseIssuedBy", e.target.value)
                  }
                />
              </div>
              <button
                className="btn"
                onClick={() => dispatch(updateUserAdmin(user))}
              >
                Enregister
              </button>
            </form>
          ))}
      </main>
    </section>
  );
};

export default AllProfile;
