import { useState, useEffect } from 'react';

import { obtenerProductos, agregarProducto, eliminarProducto } from '@/api/productos';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Card from '@/components/Card';
import '@/styles/carta.scss';

function Carta() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorApi, setErrorApi] = useState('');

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');

  const [errorNombre, setErrorNombre] = useState('');
  const [errorCategoria, setErrorCategoria] = useState('');
  const [errorPrecio, setErrorPrecio] = useState('');

  useEffect(() => {
    async function cargarProductos() {
      const datos = await obtenerProductos();

      setProductos(datos);
      setCargando(false);

      if (datos.length === 0) {
        setErrorApi('No se pudieron cargar los productos o la carta está vacía.');
      }
    }

    cargarProductos();
  }, []);

  async function manejarEnvio(evento) {
    evento.preventDefault();

    const nombreValido = nombre.trim() !== '';
    const categoriaValida = categoria.trim() !== '';
    const precioValido = Number(precio) > 0;

    setErrorNombre(nombreValido ? '' : 'El nombre es obligatorio');
    setErrorCategoria(categoriaValida ? '' : 'La categoría es obligatoria');
    setErrorPrecio(precioValido ? '' : 'El precio debe ser mayor a cero');

    if (!nombreValido || !categoriaValida || !precioValido) {
      return;
    }

    const nuevoProducto = {
      nombre: nombre.trim(),
      categoria: categoria.trim(),
      precio: Number(precio),
      disponible: true,
    };

    const resultado = await agregarProducto(nuevoProducto);

    if (resultado) {
      setProductos((actuales) => [...actuales, resultado]);

      setNombre('');
      setCategoria('');
      setPrecio('');

      setErrorNombre('');
      setErrorCategoria('');
      setErrorPrecio('');
      setErrorApi('');
    } else {
      setErrorApi('No se pudo agregar el producto.');
    }
  }

  async function manejarEliminacion(id) {
    const eliminado = await eliminarProducto(id);

    if (eliminado) {
      setProductos((actuales) => actuales.filter((producto) => producto.id !== id));
    } else {
      setErrorApi('No se pudo eliminar el producto.');
    }
  }

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  return (
    <main>
      <h1>Nuestra Carta</h1>

      <section>
        <h2>Agregar producto</h2>

        <form onSubmit={manejarEnvio}>
          <Input
            placeholder='Nombre del producto'
            value={nombre}
            error={errorNombre}
            onChange={(evento) => {
              setNombre(evento.target.value);
              setErrorNombre(evento.target.value.trim() === '' ? 'El nombre es obligatorio' : '');
            }}
          />

          <Input
            placeholder='Categoría'
            value={categoria}
            error={errorCategoria}
            onChange={(evento) => {
              setCategoria(evento.target.value);
              setErrorCategoria(
                evento.target.value.trim() === '' ? 'La categoría es obligatoria' : '',
              );
            }}
          />

          <Input
            type='number'
            placeholder='Precio'
            value={precio}
            error={errorPrecio}
            min='1'
            onChange={(evento) => {
              setPrecio(evento.target.value);
              setErrorPrecio(
                Number(evento.target.value) <= 0 ? 'El precio debe ser mayor a cero' : '',
              );
            }}
          />

          <Button type='submit'>Agregar producto</Button>
        </form>
      </section>

      <section>
        <h2>Productos disponibles</h2>

        {errorApi && <p role='alert'>{errorApi}</p>}

        {productos.map((producto) => (
          <Card
            key={producto.id}
            titulo={producto.nombre}
            categoria={producto.categoria}
            precio={producto.precio}
            onEliminar={() => manejarEliminacion(producto.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default Carta;
