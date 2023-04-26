import React, { useEffect, useState } from "react";
import "./allVehicle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVehicle,
  getAllVehicle,
  updateVehicle,
} from "../../../redux/vehicleRedux/requestVehicle";
import { Link } from "react-router-dom";
import { updateMedia } from "../../../redux/mediaRedux/requestMedia";

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

  const handleChangeMedia = (id, elementId, key, value) => {
    const updatedVehicleAll = vehicleAll.map((vehicle) => {
      if (vehicle.id === id) {
        const updatedMedia = vehicle.Media.map((element) => {
          if (element.id === elementId) {
            return { ...element, [key]: value };
          }
          return element;
        });
        return { ...vehicle, Media: updatedMedia };
      }
      return vehicle;
    });
    setVehicleAll(updatedVehicleAll);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="containerVehicleAll">
      <h2>Les véhicules enregistrés</h2>
      <div>
        <Link className="linkShowModel" to="/models">
          Voir nos modèles
        </Link>
      </div>
      <span className="linkCreateVehicle">
        <Link to="/vehicle/create">Ajouter un véhicule</Link>
      </span>
      {Array.isArray(vehicleAll) &&
        vehicleAll.map((vehicle) => (
          <form
            onSubmit={handleSubmit}
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
                id="brand"
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
                id="vehicleNumber"
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
                id="range"
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
                id="power"
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
                id="charging"
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
                id="maximunSpeed"
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
                id="typeOfPlug"
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
                id="passenger"
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
                id="cargo"
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
                id="door"
                name="door"
                value={vehicle.door}
                onChange={(e) =>
                  handleChange(vehicle.id, "door", e.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="categorie">Catégorie</label>
              <input
                type="text"
                id="categorie"
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
                id="bikeSize"
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
                id="bikeWeight"
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
                id="priceByday"
                name="priceByDay"
                required
                value={vehicle.priceByDay}
                onChange={(e) =>
                  handleChange(vehicle.id, "priceByDay", e.target.value)
                }
              />
            </div>
            <span className="titleMedia">Modifier média</span>
            <>
              {vehicle.Media.map((element) => (
                <span key={element.id}>
                  <>
                    <div>
                      <label htmlFor="image">Nom image</label>
                      <input
                        type="text"
                        id="image"
                        name="image"
                        value={element.image}
                        onChange={(e) =>
                          handleChangeMedia(
                            vehicle.id,
                            element.id,
                            "image",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={element.description}
                        onChange={(e) =>
                          handleChangeMedia(
                            vehicle.id,
                            element.id,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch(updateMedia(element));
                        dispatch(updateVehicle(vehicle));
                      }}
                    >
                      Enregister
                    </button>
                  </>
                </span>
              ))}
            </>
            <button
              className="btn"
              onClick={() => dispatch(deleteVehicle(vehicle.id))}
            >
              Supprimer
            </button>
          </form>
        ))}
    </section>
  );
};

export default AllVehicle;
