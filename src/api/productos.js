const API_URL = 'http://localhost:3001/productos';

// Obtener productos (GET)
export async function obtenerProductos() {
  try {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error('Error al obtener los productos');
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Agregar productos (POST)
export async function agregarProducto(producto) {
  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });

    if (!respuesta.ok) {
      throw new Error('Error al agregar el producto');
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Eliminar productos (DELETE)
export async function eliminarProducto(id) {
  try {
    const respuesta = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!respuesta.ok) {
      throw new Error('Error al eliminar el producto');
    }

    return true;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}
