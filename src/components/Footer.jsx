import "./Footer.css";
import footerLogo from "../assets/sedimotors.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__description">
        <img src={footerLogo} alt="sedimotors" className="footer__logo" />
        <p>
          Tu Dealer de confianza. Encuentra el vehículo perfecto con las mejores
          ofertas y el mejor servicio.
        </p>
      </div>
      <div className="footer__contact">
        <h3>Contacto</h3>
        <p>
          <i className="fa-solid fa-phone"></i> (829) 639-7848
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> @sedimotors
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i> F5VR+FRF, C. A, Santo
          Domingo Este
        </p>
      </div>
      <div className="footer__social-networks">
        <h3>Síguenos</h3>
        <a
          href="https://www.instagram.com/sedi_motors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/Sedimotors"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <p className="footer__copyright">
        &copy; 2025 Sedimotors. Todos los derechos reservados.
      </p>
    </footer>
  );
}
