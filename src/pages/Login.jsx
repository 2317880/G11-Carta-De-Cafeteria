import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';

function Login() {
  const [nombre, setNombre] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const navigate = useNavigate();

  function ingresar(evento) {
    evento.preventDefault();

    if (nombre.trim() === '') {
      setErrorNombre('El nombre es obligatorio');
      return;
    }

    localStorage.setItem('usuario', nombre);
    navigate('/carta');
  }

  return (
    <main className='pagina-login'>
      <section>
        <h2>Bienvenido a Rita Cafetería</h2>

        <p>Ingresá tu nombre para continuar.</p>

        <form onSubmit={ingresar}>
          <Input
            placeholder='Ingresá tu nombre'
            value={nombre}
            error={errorNombre}
            onChange={(evento) => {
              setNombre(evento.target.value);

              setErrorNombre(evento.target.value.trim() === '' ? 'El nombre es obligatorio' : '');
            }}
          />

          <Button type='submit'>Ingresar</Button>
        </form>
      </section>
    </main>
  );
}

export default Login;
