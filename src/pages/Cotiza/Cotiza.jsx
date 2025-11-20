import FormGroup from "../../components/FormGroup/FormGroup.jsx";
import "./Cotiza.css";

const inputData = [
  {
    id: "nombre",
    labelName: "Nombre",
    name: "nombre",
    type: "text",
    placeholder: "Nombre",
    pattern: "[A-Za-záéíóúÁÉÍÓÚñÑ\\s]+",
    dataError: "Por favor, ingrese un nombre válido",
  },
  {
    id: "email",
    labelName: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    dataError: "Por favor, ingrese un email válido",
  },
  {
    id: "telefono",
    labelName: "Teléfono",
    name: "telefono",
    type: "tel",
    placeholder: "Teléfono",
    pattern: "[0-9]{10}",
    dataError: "Por favor, ingrese un teléfono válido de 10 dígitos",
  },
];

export default function Cotiza() {
  return (
    <section id="cotiza" className="cotiza" aria-labelledby="cotiza-title">
      <div className="container">
        <h4 id="cotiza-title">¡COTIZA Y AGENDA TU PRUEBA DE MANEJO AHORA!</h4>
        <p>Completa el formulario y accede a ofertas exclusivas</p>

        <form
          id="cotizaForm"
          class="cotiza__card"
          action="https://formsubmit.co/josegabrielperezcalcano14@gmail.com"
          method="POST"
          aria-describedby="cotiza-desc"
          novalidate
        >
          <input
            type="hidden"
            name="_next"
            value="https://joseperez0314.github.io/sedimotors/thanks.html"
          />
          <input
            type="hidden"
            name="_subject"
            value="Nueva solicitud de cotización - Sedimotors"
          />
          <input type="hidden" name="_template" value="table" />
          <p id="cotiza-desc" class="visually-hidden">
            Formulario de cotización: nombre, email y teléfono
          </p>

          {inputData.map((input) => (
            <FormGroup
              key={input.id}
              id={input.id}
              labelName={input.labelName}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              pattern={input.pattern}
              dataError={input.dataError}
            />
          ))}

          <button
            class="cotiza__button"
            type="submit"
            aria-label="Solicitar información"
          >
            SOLICITAR INFORMACION
          </button>

          <div class="form-status" aria-live="polite"></div>
        </form>
      </div>
    </section>
  );
}
