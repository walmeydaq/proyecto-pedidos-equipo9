const {
    listarPedidos,
    buscarPedido,
    agregarPedido
} = require("./pedidos");

console.log(" LISTA DE PEDIDOS ");
console.log(listarPedidos());

console.log("\n AGREGAR NUEVO Pedido");
console.log(
    agregarPedido(
        "Carolina Delgado",
        "Mouse",
        1,
        "Pendiente"
    )
);

console.log("\n LISTA ACTUALIZADA ");
console.log(listarPedidos());

console.log("\n BUSCAR PEDIDO  ");
console.log(buscarPedido(2));
