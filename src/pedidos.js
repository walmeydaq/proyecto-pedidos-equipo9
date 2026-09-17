// Arreglo de pedidos
let pedidos = [
    {
        id: 1,
        cliente: "Razzek Hernandez",
        producto: "Impresora HP",
        cantidad: 5,
        estado: "Pendiente"
    },
    {
        id: 2,
        cliente: "Bianca Orihuela",
        producto: "PC Intel",
        cantidad: 4,
        estado: "Confirmado"
    }
];

// Listar pedidos
function listarPedidos() {
    return pedidos;
}

// Buscar pedido por ID
function buscarPedido(id) {
    return pedidos.find(pedido => pedido.id === id);
}

// Agregar nuevo pedido
function agregarPedido(cliente, producto, cantidad, estado) {
    const nuevoPedido = {
        id: pedidos.length + 1,
        cliente: cliente,
        producto: producto,
        cantidad: cantidad,
        estado: estado
    };

    pedidos.push(nuevoPedido);

    return nuevoPedido;
}

// funciones
module.exports = {
    listarPedidos,
    buscarPedido,
    agregarPedido
};
