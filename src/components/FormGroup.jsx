import "./FormGroup.css";

export default function Input({
  id,
  labelName,
  name,
  type,
  placeholder,
  pattern,
  dataError,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="visually-hidden">
        {labelName}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        data-error={dataError}
        className="cotiza__input"
      />
      <span className="error-message" aria-live="polite"></span>
    </div>
  );
}
