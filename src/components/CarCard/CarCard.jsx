import "./CardCard.css";

export default function CarCard({ title, image, description }) {
  return (
    <a
      href="https://www.instagram.com/sedi_motors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
      className="car-card"
    >
      <img src={image} alt={title} className="car-card__image" loading="lazy" />
      <h3 className="car-card__title">{title}</h3>
      <p className="car-card__details">{description}</p>
    </a>
  );
}
