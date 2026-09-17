// Valida los datos requeridos de un pedido.

function validarPedido(pedido) {
    const errores = [];

    if (!pedido.cliente || pedido.cliente.trim() === "") {
        errores.push("El cliente es obligatorio.");
    }

    if (!Array.isArray(pedido.productos) || pedido.productos.length === 0) {
        errores.push("El pedido debe contener al menos un producto.");
    }

    if (pedido.productos) {
        pedido.productos.forEach((producto, index) => {
            if (!producto.nombre || producto.nombre.trim() === "") {
                errores.push(`El producto ${index + 1} debe tener un nombre.`);
            }

            if (!Number.isInteger(producto.cantidad) || producto.cantidad <= 0) {
                errores.push(`La cantidad del producto ${index + 1} debe ser mayor que 0.`);
            }

            if (typeof producto.precio !== "number" || producto.precio < 0) {
                errores.push(`El precio del producto ${index + 1} no es válido.`);
            }
        });
    }

    return {
        valido: errores.length === 0,
        errores
    };
}

module.exports = {
    validarPedido
};