const buscar = document.querySelector("#buscar");
const filtroCategoria = document.querySelector("#filtrar-categoria");
const filtroTacc = document.querySelector("#filtrar-tacc");
const resultado = document.querySelector("#resultado-filtros");
const categorias = document.querySelectorAll(".categoria");

const filtrosGuardados = sessionStorage.getItem("filtrosCarta");
if (filtrosGuardados) {
    const filtros = JSON.parse(filtrosGuardados);
    buscar.value = filtros.busqueda || "";
    filtroCategoria.value = filtros.categoria || "todas";
    filtroTacc.value = filtros.tacc || "todos";
}

function normalizar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtrarProductos() {
    const texto = normalizar(buscar.value.trim());
    let total = 0;

    categorias.forEach(function (categoria) {
        let visibles = 0;

        categoria.querySelectorAll(".producto").forEach(function (producto) {
            const coincideTexto = normalizar(producto.textContent).includes(texto);
            const coincideCategoria = filtroCategoria.value === "todas" || categoria.dataset.categoria === filtroCategoria.value;
            const coincideTacc = filtroTacc.value === "todos" || producto.dataset.tacc === filtroTacc.value;
            const mostrar = coincideTexto && coincideCategoria && coincideTacc;

            producto.hidden = !mostrar;
            if (mostrar) visibles++;
        });

        categoria.hidden = visibles === 0;
        total += visibles;
    });

    resultado.textContent = total === 0 ? "No se encontraron productos con esos filtros." : total + " producto" + (total === 1 ? "" : "s") + " encontrado" + (total === 1 ? "" : "s") + ".";
}

function actualizarFiltros() {
    sessionStorage.setItem("filtrosCarta", JSON.stringify({
        busqueda: buscar.value,
        categoria: filtroCategoria.value,
        tacc: filtroTacc.value
    }));
    filtrarProductos();
}

buscar.addEventListener("input", actualizarFiltros);
filtroCategoria.addEventListener("change", actualizarFiltros);
filtroTacc.addEventListener("change", actualizarFiltros);
filtrarProductos();
