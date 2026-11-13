function Card({ titulo, categoria, descripcion, precio, children, onEliminar }) {
  return (
    <article className='card'>
      <h3>{titulo}</h3>

      {categoria && <p>{categoria}</p>}

      {descripcion && <p>{descripcion}</p>}

      {precio !== undefined && (
        <p className='card-precio'>${Number(precio).toLocaleString('es-AR')}</p>
      )}

      {children}

      {onEliminar && (
        <button type='button' onClick={onEliminar}>
          Eliminar
        </button>
      )}
    </article>
  );
}

export default Card;
