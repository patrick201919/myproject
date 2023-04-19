import React, { useEffect, useState } from "react";
import "./allVehicle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVehicle,
  getAllVehicle,
  updateVehicle,
} from "../../../redux/vehicleRedux/requestVehicle";

const AllVehicle = () => {
  const { vehicles } = useSelector((state) => state.vehicles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVehicle());
  }, [dispatch]);

  const [vehicleAll, setVehicleAll] = useState(vehicles);

  useEffect(() => {
    setVehicleAll(vehicles);
  }, [vehicles]);

  const handleChange = (id, key, value) => {
    const updatedVehiclAll = vehicleAll.map((vehicle) => {
      if (vehicle.id === id) {
        return { ...vehicle, [key]: value };
      }
      return vehicle;
    });
    setVehicleAll(updatedVehiclAll);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // const handleDeleteClick = () => {
  //   dispatch(deleteVehicle(vehicleAll));
  // };
  return (
    <section className="containerVehicleAll">
      <h2>Les véhicules enregistrés</h2>
      {vehicleAll.map((vehicle) => (
        <form
          onClick={handleSubmit}
          key={vehicle.id}
          className="formVehicleAll"
        >
          <div>
            <label htmlFor="typeOfVehicle">Type de véhicule</label>
            <select
              name="typeOfVehicle"
              id="typeOfVehicle"
              value={vehicle.typeOfVehicle}
              onChange={(e) =>
                handleChange(vehicle.id, "typeOfVehicle", e.target.value)
              }
            >
              <option value="car">Voiture</option>
              <option value="scooter">scooter</option>
              <option value="elecScooter">Trotinette</option>
              <option value="bike">Vélo</option>
            </select>
          </div>
          <div>
            <label htmlFor="brand">Marque</label>
            <input
              type="text"
              name="brand"
              required
              value={vehicle.brand}
              onChange={(e) =>
                handleChange(vehicle.id, "brand", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="vehicleNumber">Numéro de véhicule</label>
            <input
              type="text"
              name="vehicleNumber"
              required
              value={vehicle.vehicleNumber}
              onChange={(e) =>
                handleChange(vehicle.id, "vehicleNumber", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="range">Autonomie</label>
            <input
              type="text"
              name="range"
              required
              value={vehicle.range}
              onChange={(e) =>
                handleChange(vehicle.id, "range", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="power">Puissance</label>
            <input
              type="text"
              name="power"
              value={vehicle.power}
              onChange={(e) =>
                handleChange(vehicle.id, "power", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="charging">Recharge</label>
            <input
              type="text"
              name="charging"
              required
              value={vehicle.charging}
              onChange={(e) =>
                handleChange(vehicle.id, "charging", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="maximunSpeed">Vitesse maximale</label>
            <input
              type="text"
              name="maximunSpeed"
              value={vehicle.maximunSpeed}
              onChange={(e) =>
                handleChange(vehicle.id, "maximunSpeed", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="typeOfPlug">Type de prise</label>
            <input
              type="text"
              name="typeOfPlug"
              required
              value={vehicle.typeOfPlug}
              onChange={(e) =>
                handleChange(vehicle.id, "typeOfPlug", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="passenger">Nombre de passagers</label>
            <input
              type="text"
              name="passenger"
              value={vehicle.passenger}
              onChange={(e) =>
                handleChange(vehicle.id, "passenger", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="cargo">Capacité de chargement</label>
            <input
              type="text"
              name="cargo"
              value={vehicle.cargo}
              onChange={(e) =>
                handleChange(vehicle.id, "cargo", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="door">Nombre de portes</label>
            <input
              type="text"
              name="door"
              value={vehicle.door}
              onChange={(e) => handleChange(vehicle.id, "door", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="categorie">Catégorie</label>
            <input
              type="text"
              name="categorie"
              value={vehicle.categorie}
              onChange={(e) =>
                handleChange(vehicle.id, "categorie", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="bikeSize">Taille du vélo</label>
            <input
              type="text"
              name="bikeSize"
              value={vehicle.bikeSize}
              onChange={(e) =>
                handleChange(vehicle.id, "bikeSize", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="bikeWeight">Poids vélo</label>
            <input
              type="text"
              name="bikeWeight"
              value={vehicle.bikeWeight}
              onChange={(e) =>
                handleChange(vehicle.id, "bikeWeight", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="priceByDay">Prix par jour</label>
            <input
              type="text"
              name="priceByDay"
              required
              value={vehicle.priceByDay}
              onChange={(e) =>
                handleChange(vehicle.id, "priceByDay", e.target.value)
              }
            />
          </div>
          <button
            className="btn"
            onClick={() => dispatch(deleteVehicle(vehicle.id))}
          >
            Supprimer
          </button>
          <button
            className="btn"
            onClick={() => dispatch(updateVehicle(vehicle))}
          >
            Enregister
          </button>
        </form>
      ))}
    </section>
  );
};
// typeOfVehicle,
// brand,
// vehicleNumber,
// range,
// power,
// charging,
// maximunSpeed,
// typeOfPlug,
// passenger,
// cargo,
// door,
// categorie,
// bikeSize,
// bikeWeight,
// priceByDay,

export default AllVehicle;
