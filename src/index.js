const {
    insertarCliente,
    listarClientes,
    buscarCliente
} = require("./clientes");

console.log("=== LISTA INICIAL ===");
console.log(listarClientes());

console.log("\n=== INSERTAR CLIENTE ===");
console.log(
    insertarCliente("Juana Orihuela", "juana@gmail.com", "Activo")
);

console.log("\n=== LISTA ACTUALIZADA ===");
console.log(listarClientes());

console.log("\n=== BUSCAR CLIENTE ===");
console.log(buscarCliente("Juana Orihuela"));
