import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className='encabezado'>
        <Link className='logo' to='/' aria-label='Rita Cafetería, ir al inicio'>
          <img src='/imagenes/logo-rita.svg' alt='Logo de Rita Cafetería' />
        </Link>

        <div className='marca'>
          <h1>Rita Cafetería</h1>
          <p>Cafetería de Especialidad</p>
        </div>

        <nav>
          <Link to='/'>Inicio</Link>
          <Link to='/carta'>Carta</Link>
          <Link to='/nosotros'>Nosotros</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/login'>Ingresar</Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        <h2>Visitá Rita</h2>
        <p>Av. Poeta Lugones 3321 · Córdoba, Argentina</p>
        <p>Lunes a sábado: 8:00 - 21:00</p>
        <p>Domingo: 9:00 - 18:00</p>
        <p>© 2026 Rita Cafetería. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Layout;
