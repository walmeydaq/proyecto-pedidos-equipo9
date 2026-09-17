//Módulo Clientes
// Información inicial del módulo de clientes

const cliente = {
    nombre: "Nicole Lopez",
    correo: "nicole@gmail.com",
    estado: "Activo"
};

const ClienteModelo = require("./clienteModelo");

// Lista de clientes registrados
const clientes = [
    new ClienteModelo("Nicole Lopez", "nicole@gmail.com", "Activo")
];

// Insertar un nuevo cliente
function insertarCliente(nombre, correo, estado) {
    const nuevoCliente = new ClienteModelo(nombre, correo, estado);

    clientes.push(nuevoCliente);

    return nuevoCliente;
}

// Listar todos los clientes
function listarClientes() {
    return clientes;
}

// Buscar cliente por nombre
function buscarCliente(nombre) {
    return clientes.find(cliente =>
        cliente.nombre.toLowerCase() === nombre.toLowerCase()
    );
}

module.exports = {
    insertarCliente,
    listarClientes,
    buscarCliente
};
