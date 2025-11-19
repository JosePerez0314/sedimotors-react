import sedimotors from "../assets/sedimotors.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        src={sedimotors}
        alt="Logo de Sedimotors - Concesionario de vehículos"
        className="header__logo"
      />

      <div className="header__social-buttons">
        <a
          href="https://www.instagram.com/sedi_motors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="header__social"
          aria-label="Síguenos en Instagram"
          title="Visita nuestro perfil de Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
          <span className="visually-hidden">Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/Sedimotors"
          target="_blank"
          rel="noopener noreferrer"
          className="header__social"
          aria-label="Síguenos en Facebook"
          title="Visita nuestra página de Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
          <span className="visually-hidden">Facebook</span>
        </a>
        <a
          href="tel:+18296397848"
          className="header__call-button"
          aria-label="Llamar ahora"
          title="Llámanos al (829) 639-7848"
        >
          <i className="fa-solid fa-phone"></i>
          Llamar
        </a>
      </div>
    </header>
  );
}
