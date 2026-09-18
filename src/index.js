const {
    listarPedidos,
    buscarPedido,
    agregarPedido
} = require("./pedidos");

const {
    insertarCliente,
    listarClientes,
    buscarCliente
} = require("./clientes");

console.log("=== LISTA DE PEDIDOS ===");
console.log(listarPedidos());

console.log("\n=== AGREGAR NUEVO PEDIDO ===");
console.log(
    agregarPedido(
        "Carolina Delgado",
        "Mouse",
        1,
        "Pendiente"
    )
);

console.log("\n=== LISTA ACTUALIZADA DE PEDIDOS ===");
console.log(listarPedidos());

console.log("\n=== BUSCAR PEDIDO ===");
console.log(buscarPedido(2));

console.log("\n=== LISTA INICIAL DE CLIENTES ===");
console.log(listarClientes());

console.log("\n=== INSERTAR CLIENTE ===");
console.log(
    insertarCliente("Juana Orihuela", "juana@gmail.com", "Activo")
);

console.log("\n=== LISTA ACTUALIZADA DE CLIENTES ===");
console.log(listarClientes());

console.log("\n=== BUSCAR CLIENTE ===");
console.log(buscarCliente("Juana Orihuela"));