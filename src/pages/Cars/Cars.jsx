import CarCard from "../../components/CarCard/CarCard.jsx";
import "./Cars.css";

import nissanImg from "../../assets/nissan.jpeg";
import crvImg from "../../assets/crv.jpeg";
import outlanderImg from "../../assets/outlander.jpeg";

const carList = [
  {
    id: 1,
    title: "Nissan Sentra",
    description: "Sedán compacto, eficiente y moderno",
    image: nissanImg,
  },
  {
    id: 2,
    title: "Honda CR-V",
    description: "SUV versátil, espacioso y confiable",
    image: crvImg,
  },
  {
    id: 3,
    title: "Mitsubishi Outlander",
    description: "SUV familiar, tecnología avanzada",
    image: outlanderImg,
  },
];

export default function Cars() {
  return (
    <section id="cars" className="cars">
      <div className="container">
        <h2>VEHICULOS DESTACADOS</h2>

        <div className="cars__container">
          {carList.map((car) => (
            <CarCard
              key={car.id}
              title={car.title}
              description={car.description}
              image={car.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
