// Valida que el nombre exista y tenga una longitud mínima
function validarNombre(nombre) {
    if (!nombre || typeof nombre !== 'string') {
        return { valido: false, mensaje: 'El nombre es obligatorio y debe ser texto.' };
    }
    if (nombre.trim().length < 3) {
        return { valido: false, mensaje: 'El nombre debe tener al menos 3 caracteres.' };
    }
    return { valido: true };
}

// Valida que el precio sea un número positivo
function validarPrecio(precio) {
    if (typeof precio !== 'number' || isNaN(precio)) {
        return { valido: false, mensaje: 'El precio debe ser un número válido.' };
    }
    if (precio <= 0) {
        return { valido: false, mensaje: 'El precio debe ser mayor a 0.' };
    }
    return { valido: true };
}

// Valida que el stock sea un entero no negativo
function validarStock(stock) {
    if (!Number.isInteger(stock) || stock < 0) {
        return { valido: false, mensaje: 'El stock debe ser un número entero mayor o igual a 0.' };
    }
    return { valido: true };
}

// Valida que la categoría este dentro de una lista permitida
function validarCategoria(categoria, categoriasPermitidas = ['Electrónica', 'Ropa', 'Hogar', 'Alimentos']) {
    if (!categoria || !categoriasPermitidas.includes(categoria)) {
        return { valido: false, mensaje: `La categoría no es válida. Permitidas: ${categoriasPermitidas.join(', ')}` };
    }
    return { valido: true };
}

// Función principal
function validarProductoCompleto(producto) {
    const errores = [];

    const resNombre = validarNombre(producto.nombre);
    if (!resNombre.valido) errores.push(resNombre.mensaje);

    const resPrecio = validarPrecio(producto.precio);
    if (!resPrecio.valido) errores.push(resPrecio.mensaje);

    const resStock = validarStock(producto.stock);
    if (!resStock.valido) errores.push(resStock.mensaje);

    const resCat = validarCategoria(producto.categoria);
    if (!resCat.valido) errores.push(resCat.mensaje);

    return {
        esValido: errores.length === 0,
        errores
    };
}

// Exportar funciones 
module.exports = {
    validarNombre,
    validarPrecio,
    validarStock,
    validarCategoria,
    validarProductoCompleto
};