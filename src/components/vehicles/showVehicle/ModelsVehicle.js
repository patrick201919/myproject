import React, { useEffect } from "react";
import "./modelsVehicle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllVehicle } from "../../../redux/vehicleRedux/requestVehicle";

const ModelsVehicle = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const car = "Voiture électrique ou similaire";
  const scooter = "Scooter électrique ou similaire";
  const bike = "Vélo électrique ou similaire";
  const elecScooter = "Trottinette électrique ou similaire";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVehicle());
  }, [dispatch]);

  const showImage = "image/showVehicle/";
  return (
    <section className="containerShowVehicle">
      <h2>Les modèles et la tarification</h2>
      <main>
        {Array.isArray(vehicles) &&
          vehicles.map((vehicle) => (
            <article key={vehicle.id}>
              {vehicle.Media.map((element) => (
                <div key={element.id} className="media">
                  <img
                    className="imgModel"
                    src={showImage + element.image}
                    alt={element.description}
                  />
                </div>
              ))}
              <div className="vehicle">
                <p className="typeOfVehicle">
                  {vehicle.typeOfVehicle
                    ? vehicle.typeOfVehicle === "car"
                      ? car
                      : vehicle.typeOfVehicle === "scooter"
                      ? scooter
                      : vehicle.typeOfVehicle === "bike"
                      ? bike
                      : vehicle.typeOfVehicle === "elecScooter"
                      ? elecScooter
                      : ""
                    : ""}
                </p>
                <p className="priceByDay">{vehicle.priceByDay} € / Par jour</p>
                <button className="btn btn-models">
                  Recherchez votre véhicule
                </button>
              </div>
            </article>
          ))}
      </main>
    </section>
  );
};

export default ModelsVehicle;
