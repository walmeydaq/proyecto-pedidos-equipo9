// Consulta productos según su categoría.

const productos = require("./datosProductos.json");

// Filtrar productos por categoría
function listarProductosPorCategoria(categoria) {
    if (!categoria || categoria.trim() === "") {
        return [];
    }

    return productos.filter(producto =>
        producto.categoria.toLowerCase() === categoria.trim().toLowerCase()
    );
}

module.exports = {
    listarProductosPorCategoria
};