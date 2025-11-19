import "./Main.css";

export default function Main() {
  return (
    <main id="hero" className="hero">
      <p className="hero__offers">Ofertas Exclusivas!</p>

      <div className="hero__content-container">
        <h1>
          <span>Sedimotors</span> Tu Dealer de Vehículos Importados
        </h1>
        <p>
          Encuentra el auto perfecto para ti con la ayuda de nuestros expertos
        </p>
        <a
          href="#cotiza"
          className="hero__button"
          aria-label="Solicitar información"
        >
          SOLICITAR INFORMACION
        </a>
      </div>
    </main>
  );
}
