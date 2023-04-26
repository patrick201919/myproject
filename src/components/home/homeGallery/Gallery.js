import React from "react";
import "./gallery.module.scss";

const Gallery = () => {
  return (
    <div className="containerGalleryHome">
      <h2>Nos différentes catégories de véhicule</h2>
      <div className="containerImgText">
        <article className="carImgText">
          <div className="carImg">
            <img src="/image/cars/tesla-white2.jpg" alt="Tesla blanche" />
          </div>
          <p className="carText">
            Nos voitures sont synonymes de flexibilité. Elles sont équipées de
            la dernière technologie de recharge rapide, ce qui vous permet de
            profiter d'une mobilité sans limites grâce à notre réseau de
            recharge facilement accessible.
          </p>
        </article>
        <article className="scooterImgText">
          <div>
            <img
              src="/image/scooter/scooter-orange-green2.png"
              alt="scooter électrique"
            />
          </div>
          <p className="scooterText">
            Découvrez la liberté de la ville avec nos scooters. Avec une
            conduite souple et silencieuse.
          </p>
        </article>
        <article className="elecScooterImgText">
          <div>
            <img
              src="/image/elec-scooter/elec-scooter-gray.jpg"
              alt="trottinette électrique"
            />
          </div>
          <p className="elecScooterText">
            Prenez le contrôle de votre lieu avec nos trottinettes. Avec leur
            conduite agile et rapide.
          </p>
        </article>
        <article className="bikeImgText">
          <div>
            <img src="/image/bikes/bike-black.jpg" alt="vélo électrique" />
          </div>
          <p className="bikeText">
            Parcourez les rues, les routes... avec facilité et sans effort grâce
            à nos vélos nouvelle géneration.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Gallery;
