# Carta de Cafetería

## Descripción

### 1- ¿Qué hace este proyecto?

Este proyecto consiste en el desarrollo de una página web HTML que muestra la carta digital de una cafetería. La página presenta de manera clara y atractiva los productos disponibles (bebidas calientes, frías, pastelería y snacks), junto con sus precios y descripciones breves.

### 2- ¿Para qué sirve?

Sirve como herramienta de presentación digital para el negocio, permitiendo que los clientes consulten la oferta desde sus dispositivos móviles o computadoras, sin necesidad de contacto físico con menús impresos. Facilita la actualización de precios y productos de forma ágil.

### 3- ¿Quién es el público objetivo?

* **Clientes finales:** Personas que visitan la cafetería y desean conocer la carta antes de pedir, o que piden para llevar.

* **Dueños y encargados del local:** Para gestionar y actualizar la oferta de manera sencilla.

* **Desarrolladores web:** Como proyecto de aprendizaje para practicar flujos de trabajo con Git (ramas `main`, `produccion` y `testing`).
## Guía para un nuevo miembro del equipo

Esta guía explica los pasos básicos que debe seguir un nuevo integrante para comenzar a trabajar en el proyecto y mantener un flujo de trabajo ordenado con el resto del equipo.

### 1- ¿Cómo bajar el repositorio?

Para comenzar a trabajar en el proyecto, primero se debe clonar el repositorio desde GitHub utilizando:

```bash
git clone URL_DEL_REPOSITORIO
```

Luego, ingresar a la carpeta del proyecto:

```bash
cd NOMBRE_DEL_REPOSITORIO
```

### 2- Flujo de trabajo con Git

El proyecto utiliza tres ramas principales:

* **main:** contiene la versión estable del proyecto.
* **testing:** se utiliza para integrar y probar los cambios antes de llevarlos a producción.
* **production:** contiene la versión destinada a producción.

Para desarrollar una nueva funcionalidad o realizar una modificación, se debe crear una rama propia a partir de la rama correspondiente.

Por ejemplo:

```bash
git checkout testing
git pull
git checkout -b feature/nombre-funcionalidad
```

Una vez realizados los cambios:

```bash
git add .
git commit -m "tipo: descripción breve del cambio"
git push origin feature/nombre-funcionalidad
```

### 3- Estructura de los commits

Los commits deben tener mensajes breves y descriptivos que permitan entender fácilmente qué cambio se realizó.

Se utilizará la siguiente estructura:

```text
tipo: descripción del cambio
```

Algunos tipos que pueden utilizarse son:

* `feat:` nueva funcionalidad.
* `fix:` corrección de un error.
* `docs:` cambios en documentación.
* `style:` cambios visuales o de formato.
* `refactor:` modificación del código sin cambiar su funcionalidad.

Ejemplos:

```text
feat: agregar sección de bebidas frías
fix: corregir precio del café latte
docs: actualizar descripción del proyecto
style: mejorar diseño de las tarjetas de productos
```

### 4- Trabajo con Pull Requests

Cuando un integrante termina los cambios de su rama, debe subirla a GitHub y crear una **Pull Request (PR)** hacia la rama correspondiente.

La PR debe indicar brevemente qué cambios fueron realizados y, si es necesario, cualquier detalle importante para poder probarlos.

Antes de integrar los cambios, otro miembro del equipo debe revisar la Pull Request.

Por ejemplo, alguno realiza y sube un cambio, otro será el encargado de revisar la PR. Si encuentra algún problema, solicitará los cambios necesarios. Si todo funciona correctamente, aprobará la PR para que pueda realizarse el merge.

De esta manera se evita incorporar cambios directamente sin revisión y se mantiene un flujo de trabajo ordenado dentro del proyecto.

