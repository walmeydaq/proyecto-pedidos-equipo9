// Consulta clientes según su estado.

const { listarClientes } = require("./clientes");

// Filtrar clientes por estado
function listarClientesPorEstado(estado) {
    if (!estado || estado.trim() === "") {
        return [];
    }

    return listarClientes().filter(cliente =>
        cliente.estado.toLowerCase() === estado.trim().toLowerCase()
    );
}

module.exports = {
    listarClientesPorEstado
};