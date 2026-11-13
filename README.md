# Rita Cafetería

## Descripción del proyecto

Rita Cafetería es una aplicación web desarrollada para presentar la cafetería y permitir que los usuarios consulten su carta de productos, conozcan el establecimiento y compartan su experiencia.

El proyecto fue desarrollado inicialmente con HTML, CSS y JavaScript y posteriormente migrado a React utilizando Vite.

## Funcionalidades

- Página de inicio con presentación de la cafetería.
- Navegación entre Inicio, Carta, Nosotros, Contacto e Ingresar.
- Visualización dinámica de productos.
- Búsqueda y filtrado de productos.
- Alta y eliminación de productos mediante una API simulada.
- Validación de formularios en tiempo real.
- Encuesta de satisfacción con calificaciones de estrellas.
- Inicio de sesión demostrativo mediante localStorage.
- Registro de visitas utilizando localStorage.

## Tecnologías utilizadas

- **HTML5:** estructura de la aplicación.
- **SCSS / Sass:** estilos y diseño responsive.
- **JavaScript:** lógica y funcionalidades.
- **React:** desarrollo de componentes e interfaces.
- **Vite:** entorno de desarrollo y compilación.
- **React Router DOM:** navegación entre páginas.
- **JSON Server:** simulación de una API REST.
- **Fetch API:** comunicación con el servidor.
- **localStorage:** almacenamiento local de información.

## Estructura del proyecto

```text
rita-react/
├── public/
│   └── imagenes/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── db.json
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Requisitos previos

Para ejecutar el proyecto se necesita:

- Node.js.
- npm.

## Instalación

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Ingresar a la carpeta:

```bash
cd rita-react
```

3. Instalar las dependencias:

```bash
npm install
```

## Ejecución del proyecto

Se necesitan dos terminales abiertas.

**Terminal 1: iniciar React con Vite**

```bash
npm run dev
```

**Terminal 2: iniciar JSON Server**

```bash
npm run api
```

Una vez iniciados ambos servicios, ingresar a la dirección local que muestra Vite, normalmente:

```text
http://localhost:5173
```

La API de productos se encuentra disponible en:

```text
http://localhost:3001/productos
```

## Compilación para producción

Para generar la versión de producción:

```bash
npm run build
```

Para previsualizar la compilación:

```bash
npm run preview
```

## Base de datos simulada

El proyecto utiliza JSON Server para simular una API REST.

Los productos se almacenan en:

```text
src/data/db.json
```

Se implementan las siguientes operaciones:

- **GET:** obtener los productos.
- **POST:** agregar productos.
- **DELETE:** eliminar productos.

Las operaciones se realizan utilizando Fetch API y funciones async/await.

## Componentes reutilizables

Se desarrollaron componentes genéricos para reutilizar elementos de la interfaz:

- **Button:** botones reutilizables.
- **Input:** campos de entrada con validaciones.
- **Card:** tarjetas para mostrar información de productos y contenidos.

## Autoría

Proyecto académico integrador desarrollado para la materia Desarrollo Web.
