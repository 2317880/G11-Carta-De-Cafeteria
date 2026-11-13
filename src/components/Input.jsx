function Input({ type = 'text', placeholder, value, onChange, error, min, required = true, id }) {
  const identificador = id || placeholder?.toLowerCase().replaceAll(' ', '-');

  return (
    <div className='campo-input'>
      <input
        id={identificador}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${identificador}-error` : undefined}
      />

      {error && (
        <p id={`${identificador}-error`} role='alert'>
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
