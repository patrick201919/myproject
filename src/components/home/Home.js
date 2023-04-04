import React from "react";
import "./home.module.scss";
import Time from "../underComponents/time/Time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChargingStation,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <main className="containerHome">
      <h1>Location de véhicules électrique pour une conduite souple.</h1>
      <section>
        <div>
          <form className="formSearch">
            <div className="form">
              <div className="formSelect">
                <div className="selectDeparture">
                  <label htmlFor="departureAgency">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </label>
                  <select name="AgencydepartureAgency" id="departureAgency">
                    <option value="#">AGENCE DE DEPART</option>
                    <option value="bordeux">Bordeaux</option>
                  </select>
                </div>
                <div className="selectReturn">
                  <label htmlFor="returnAgency">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </label>
                  <select name="returnAgency" id="returnAgency">
                    <option value="#">RETOUR</option>
                    <option value="bordeaux">Bordeaux</option>
                  </select>
                </div>
              </div>
              <div className="selectDateTime">
                <div className="dateTimeDeparture">
                  <div className="departureDate">
                    <label htmlFor="departureDate">DATE DE DEPART</label>
                    <input type="date" />
                  </div>
                  <Time />
                </div>
                <div className="dateTimeReturn">
                  <div className="returnDate">
                    <label htmlFor="returnDate" className="label-form">
                      RETOUR
                    </label>
                    <input type="date" />
                  </div>
                  <Time />
                </div>
              </div>
              <div className="categorie">
                <label htmlFor="categorie">
                  <FontAwesomeIcon icon={faChargingStation} />
                </label>
                <select name="categorie" id="categorie">
                  <option value="#">TYPE DE VEHICULE</option>
                  <option value="car">Voiture</option>
                  <option value="scooter">Scooter</option>
                  <option value="elecScooter">Trottinette</option>
                  <option value="bike">Vélo</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
