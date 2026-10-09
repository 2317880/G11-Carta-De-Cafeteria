const encuesta = document.querySelector("#encuesta");
const resultado = document.querySelector("#resultado-encuesta");
const boton = encuesta.querySelector("button");

encuesta.addEventListener("change", function () {
    resultado.textContent = "";
    resultado.className = "";
});

encuesta.addEventListener("submit", async function (evento) {
    evento.preventDefault();
    boton.disabled = true;
    resultado.textContent = "Enviando...";
    resultado.className = "";

    try {
        const respuesta = await fetch(encuesta.action, {
            method: encuesta.method,
            body: new FormData(encuesta),
            headers: { Accept: "application/json" }
        });

        if (!respuesta.ok) throw new Error();

        resultado.textContent = "¡Gracias! Tu encuesta se envió correctamente.";
        resultado.className = "exito";
        encuesta.reset();
    } catch {
        resultado.textContent = "No se pudo enviar la encuesta. Intentá de nuevo.";
        resultado.className = "error";
    } finally {
        boton.disabled = false;
    }
});
