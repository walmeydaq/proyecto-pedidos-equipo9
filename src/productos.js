<<<<<<< HEAD
Módulo de Productos
=======
const { validarProductoCompleto } = require('./validacionesProductos');

function crearProducto(nuevoProducto) {
    const resultadoValidacion = validarProductoCompleto(nuevoProducto);

    if (!resultadoValidacion.esValido) {
        console.error('No se pudo crear el producto por los siguientes errores:');
        console.error(resultadoValidacion.errores);
        return false;
    }

    console.log('Producto válido. Agregando al sistema...');
    return true;
}

// Ejemplo de prueba
crearProducto({
    nombre: 'Laptop',
    precio: -50,
    stock: 10,
    categoria: 'Electrónica'
});
>>>>>>> d2ad0e2d5dd626723c604f599142c9cade794fb3
