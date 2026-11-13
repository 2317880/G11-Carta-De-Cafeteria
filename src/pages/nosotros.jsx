import Card from '@/components/Card';

function Nosotros() {
  return (
    <main>
      <section className='nosotros'>
        <h2>Sobre Nosotros</h2>

        <p>
          Rita nació con la idea de crear un espacio tranquilo donde disfrutar de un buen café y
          productos artesanales. Buscamos ofrecer una experiencia simple y cuidada, combinando café
          de especialidad, panadería y opciones dulces y saladas.
        </p>

        <p>
          Nuestro objetivo es que cada visita sea una oportunidad para hacer una pausa, compartir un
          momento y disfrutar de productos elaborados con dedicación.
        </p>
      </section>

      <section className='nosotros'>
        <h2>Nuestra Filosofía</h2>

        <p>
          Creemos que un buen café depende también del ambiente, la atención y la calidad de cada
          producto. Por eso, seleccionamos nuestros ingredientes y cuidamos cada preparación.
        </p>
      </section>

      <section className='nosotros'>
        <h2>Qué ofrecemos</h2>

        <ul>
          <li>Café de especialidad.</li>
          <li>Bebidas calientes y frías.</li>
          <li>Panadería artesanal.</li>
          <li>Postres y productos dulces.</li>
          <li>Desayunos y meriendas.</li>
          <li>Opciones saladas.</li>
        </ul>
      </section>

      <section className='nosotros espacio'>
        <div>
          <h2>Nuestro Espacio</h2>

          <p>
            Queremos que Rita sea un lugar cómodo para encontrarse, estudiar, trabajar o simplemente
            disfrutar de un buen café.
          </p>

          <p>
            Creamos un ambiente cálido, relajado y agradable para que puedas sentirte como en casa.
          </p>
        </div>

        <img
          src='/imagenes/interior-cafeteria.webp'
          alt='Interior cálido de Rita Cafetería'
          className='imagen-seccion'
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '620px',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </section>

      <section className='nosotros'>
        <h2>Nuestra propuesta</h2>

        <Card
          titulo='Calidad'
          categoria='Ingredientes seleccionados'
          descripcion='Preparaciones cuidadas y productos de calidad.'
        />

        <Card
          titulo='Experiencia'
          categoria='Ambiente cálido'
          descripcion='Un espacio para disfrutar y compartir.'
        />
      </section>
    </main>
  );
}

export default Nosotros;
