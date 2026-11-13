import { useState } from 'react';
import Button from '@/components/Button';
import '@/styles/contacto.scss';

const categoriasEncuesta = [
  { id: 'comida-bebida', nombre: 'Comida y bebida' },
  { id: 'espera', nombre: 'Tiempo de espera' },
  { id: 'atencion', nombre: 'Atención' },
];

function Contacto() {
  const [calificaciones, setCalificaciones] = useState({
    'comida-bebida': '',
    espera: '',
    atencion: '',
  });

  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  function manejarCalificacion(categoria, valor) {
    setCalificaciones((actuales) => ({
      ...actuales,
      [categoria]: valor,
    }));

    setErrores((actuales) => ({
      ...actuales,
      [categoria]: '',
    }));

    setMensaje('');
  }

  async function manejarEnvio(evento) {
    evento.preventDefault();

    const nuevosErrores = {};

    categoriasEncuesta.forEach((categoria) => {
      if (!calificaciones[categoria.id]) {
        nuevosErrores[categoria.id] = 'Seleccioná una calificación.';
      }
    });

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      setMensaje('Completá todas las calificaciones.');
      setTipoMensaje('error');
      return;
    }

    setEnviando(true);
    setMensaje('');

    try {
      const datos = new FormData();

      datos.append('comida-bebida', calificaciones['comida-bebida']);
      datos.append('espera', calificaciones.espera);
      datos.append('atencion', calificaciones.atencion);

      const respuesta = await fetch('https://formspree.io/f/mdeagykg', {
        method: 'POST',
        body: datos,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!respuesta.ok) {
        throw new Error('No se pudo enviar la encuesta.');
      }

      setMensaje('¡Gracias por compartir tu experiencia!');
      setTipoMensaje('exito');

      setCalificaciones({
        'comida-bebida': '',
        espera: '',
        atencion: '',
      });
    } catch {
      setMensaje('Ocurrió un error al enviar la encuesta. Intentá nuevamente.');
      setTipoMensaje('error');
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className='pagina-contacto'>
      <section className='intro'>
        <h2>Contacto</h2>

        <p>
          ¿Querés hacer una consulta, reservar una mesa o dejarnos tu opinión? Podés contactarnos
          por teléfono o email. Si ya nos visitaste, también podés responder una encuesta breve
          sobre tu experiencia.
        </p>
      </section>

      <div className='contacto-grid'>
        <section className='datos-contacto'>
          <h2>Encontranos</h2>

          <div className='dato'>
            <h3>Dirección</h3>
            <p>
              Av. Poeta Lugones 3321
              <br />
              Córdoba, Argentina
            </p>
          </div>

          <div className='dato'>
            <h3>Horarios</h3>
            <p>
              Lunes a sábado: 8:00 - 21:00
              <br />
              Domingo: 9:00 - 18:00
            </p>
          </div>

          <div className='dato'>
            <h3>Contacto directo</h3>
            <p>
              Teléfono: +54 351 555-3321
              <br />
              Email: contacto@ritacafeteria.com
            </p>
          </div>
        </section>

        <section className='encuesta-contenedor'>
          <h2>Contanos tu experiencia</h2>

          <p>Calificá cada aspecto de 1 a 5 estrellas y envianos tu opinión.</p>

          <form onSubmit={manejarEnvio} noValidate>
            {categoriasEncuesta.map((categoria) => (
              <fieldset key={categoria.id}>
                <legend>{categoria.nombre}</legend>

                <div className='estrellas'>
                  {[5, 4, 3, 2, 1].map((valor) => (
                    <span key={valor}>
                      <input
                        type='radio'
                        id={`${categoria.id}-${valor}`}
                        name={categoria.id}
                        value={valor}
                        checked={calificaciones[categoria.id] === String(valor)}
                        onChange={() => manejarCalificacion(categoria.id, String(valor))}
                      />

                      <label htmlFor={`${categoria.id}-${valor}`} aria-label={`${valor} estrellas`}>
                        ★
                      </label>
                    </span>
                  ))}
                </div>

                {errores[categoria.id] && (
                  <p className='error-campo' role='alert'>
                    {errores[categoria.id]}
                  </p>
                )}
              </fieldset>
            ))}

            <Button type='submit' disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar encuesta'}
            </Button>

            {mensaje && (
              <p className={`resultado-encuesta ${tipoMensaje}`} role='status'>
                {mensaje}
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contacto;
