import CarCard from "./CarCard.jsx";
import "./Cars.css";

const carList = [
  {
    id: 1,
    title: "Nissan Sentra",
    description: "Sedán compacto, eficiente y moderno",
    image: "../assets/nissan.jpeg",
  },
  {
    id: 2,
    title: "Honda CR-V",
    description: "SUV versátil, espacioso y confiable",
    image: "../assets/crv.jpeg",
  },
  {
    id: 3,
    title: "Mitsubishi Outlander",
    description: "SUV familiar, tecnología avanzada",
    image: "../assets/outlander.jpeg",
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
