import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

function Inicio() {
  const [visitas, setVisitas] = useState(() => {
    return Number(localStorage.getItem('visitas')) || 0;
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('visitas', visitas);
  }, [visitas]);

  return (
    <main>
      <section className='hero'>
        <div className='hero-texto'>
          <h2>Bienvenidos a Rita</h2>

          <p>Café de especialidad, panadería artesanal y sabores simples hechos con dedicación.</p>

          <p>
            Un espacio pensado para disfrutar buenos cafés, algo rico para acompañar y tomarse el
            tiempo de una pausa.
          </p>

          <Button onClick={() => navigate('/carta')}>Ver nuestra carta</Button>
        </div>

        <img
          className='imagen-seccion'
          src='/imagenes/cafe-y-croissant.webp'
          alt='Cappuccino y croissant sobre una mesa de madera'
        />
      </section>

      <section className='destacados'>
        <h2>Lo que hacemos</h2>

        <h3>Café de especialidad</h3>
        <p>
          Trabajamos con café seleccionado y preparado cuidadosamente para destacar sus sabores y
          aromas.
        </p>

        <h3>Panadería artesanal</h3>
        <p>Croissants, tortas, medialunas y productos preparados para acompañar cada café.</p>

        <h3>Opciones para todos</h3>
        <p>
          Bebidas calientes, bebidas frías, desayunos, meriendas, opciones saladas y productos sin
          TACC.
        </p>
      </section>

      <section className='visitas'>
        <h2>Nuestra comunidad</h2>

        <p>Visitas registradas: {visitas}</p>

        <Button onClick={() => setVisitas(visitas + 1)}>Registrar visita</Button>
      </section>
    </main>
  );
}

export default Inicio;
