// Lista de categorias
const CATEGORIAS_PERMITIDAS = [
    'Electrónica',
    'Ropa',
    'Calzado',
    'Accesorios',
    'Hogar'
];


function obtenerCategorias() {
    return CATEGORIAS_PERMITIDAS;
}
 
function esCategoriaValida(categoria) {
    if (!categoria || typeof categoria !== 'string') {
        return false;
    }
    return CATEGORIAS_PERMITIDAS.includes(categoria.trim());
}


function agregarCategoria(nuevaCategoria) {
    if (!nuevaCategoria || typeof nuevaCategoria !== 'string') {
        return { exito: false, mensaje: 'El nombre de la categoría no es válido.' };
    }

    const categoriaFormateada = nuevaCategoria.trim();

    if (CATEGORIAS_PERMITIDAS.includes(categoriaFormateada)) {
        return { exito: false, mensaje: 'La categoría ya existe.' };
    }

    CATEGORIAS_PERMITIDAS.push(categoriaFormateada);
    return { exito: true, mensaje: `Categoría "${categoriaFormateada}" agregada con éxito.` };
}

module.exports = {
    obtenerCategorias,
    esCategoriaValida,
    agregarCategoria
};