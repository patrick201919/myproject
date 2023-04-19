import React, { useState } from "react";
import "./vehicleCreate.module.scss";
import { useDispatch } from "react-redux";
import { createVehicle } from "../../../redux/vehicleRedux/requestVehicle";

const VehicleCreate = () => {
  const dispatch = useDispatch();

  const [typeOfVehicle, setTypeOfVehicle] = useState("");
  const [brand, setBrand] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [range, setRange] = useState("");
  const [power, setPower] = useState("");
  const [charging, setCharging] = useState("");
  const [maximunSpeed, setMaximunSpeed] = useState("");
  const [typeOfPlug, setTypeOfPlug] = useState("");
  const [passenger, setPassenger] = useState("");
  const [cargo, setCargo] = useState("");
  const [door, setDoor] = useState("");
  const [categorie, setCategorie] = useState("");
  const [bikeSize, setBikeSize] = useState("");
  const [bikeWeight, setBikeWeight] = useState("");
  const [priceByDay, setPriceByDay] = useState("");

  const newVehicle = {
    typeOfVehicle,
    brand,
    vehicleNumber,
    range,
    power,
    charging,
    maximunSpeed,
    typeOfPlug,
    passenger,
    cargo,
    door,
    categorie,
    bikeSize,
    bikeWeight,
    priceByDay,
  };

  const handleSubmit = () => {
    dispatch(createVehicle(newVehicle));
  };

  return (
    <section className="containerVehicleCreate">
      <h2>Enregistrer un véhicule</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="typeOfVehicle">Type de véhicule</label>
          <select
            name="typeOfVehicle"
            id="typeOfVehicle"
            value={typeOfVehicle}
            required
            onChange={(e) => setTypeOfVehicle(e.target.value)}
          >
            <option value="#">choisir le type</option>
            <option value="car">voiture</option>
            <option value="scooter">scooter</option>
            <option value="elecScooter">trottinette</option>
            <option value="bike">vélo</option>
          </select>
        </div>
        <div>
          <label htmlFor="brand">Marque</label>
          <input
            type="text"
            name="brand"
            required
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="vehicleNumber">Numéro de véhicule</label>
          <input
            type="text"
            name="vehicleNumber"
            required
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="range">Autonomie</label>
          <input
            type="text"
            name="range"
            required
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="power">Puissance</label>
          <input
            type="text"
            name="power"
            value={power}
            onChange={(e) => setPower(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="charging">Recharge</label>
          <input
            type="text"
            name="charging"
            required
            value={charging}
            onChange={(e) => setCharging(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="maximunSpeed">Vitesse maximale</label>
          <input
            type="text"
            name="maximunSpeed"
            value={maximunSpeed}
            onChange={(e) => setMaximunSpeed(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="typeOfPlug">Type de prise</label>
          <input
            type="text"
            name="typeOfPlug"
            required
            value={typeOfPlug}
            onChange={(e) => setTypeOfPlug(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passenger">Nombre de passagers</label>
          <input
            type="text"
            name="passenger"
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cargo">Capacité de chargement</label>
          <input
            type="text"
            name="cargo"
            required
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="door">Nombre de portes</label>
          <input
            type="text"
            name="door"
            value={door}
            onChange={(e) => setDoor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categorie">Catégorie</label>
          <input
            type="text"
            name="categorie"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bikeSize">Taille du vélo</label>
          <input
            type="text"
            name="bikeSize"
            value={bikeSize}
            onChange={(e) => setBikeSize(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bikeWeight">Poids vélo</label>
          <input
            type="text"
            name="bikeWeight"
            value={bikeWeight}
            onChange={(e) => setBikeWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="priceByDay">Prix par jour</label>
          <input
            type="text"
            name="priceByDay"
            required
            value={priceByDay}
            onChange={(e) => setPriceByDay(e.target.value)}
          />
        </div>
        <input type="submit" value="Valider" />
      </form>
    </section>
  );
};

export default VehicleCreate;
