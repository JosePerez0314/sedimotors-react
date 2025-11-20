import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>¿NO ENCUENTRAS EL VEHICULO QUE BUSCAS? CONTACTA</h2>
        <div className="contact__container">
          <p>Llamanos directamente:</p>
          <p className="contact__phone">(829) 639-7848</p>
          <a
            href="https://wa.me/18296397848"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__whatsapp-button"
            aria-label="Contactar por WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i> CONTACTAR POR WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
