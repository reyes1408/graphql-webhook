import { Cliente } from "../../dominio/entidades/Cliente";
import { ClienteRepositorio } from "../../dominio/repositorios/cliente.repositorio";

export class UpdateClienteCasoUso {
    constructor(
        readonly clienteRepositorio: ClienteRepositorio,
    ) {}

    async run(id: number, nombre: string, email: string, password: string, registerDate: string): Promise<Cliente | null> {
        try {
            // Verificar si el cliente existe antes de intentar actualizarlo
            // const clienteExistente = await this.clienteRepositorio.obtenerClientePorId(id);
            // if (!clienteExistente) {
            //     console.error(`El cliente con el id ${id} no existe.`);
            //     return null;
            // }

            // Actualizar los datos del cliente
            const clienteActualizado = await this.clienteRepositorio.updateCliente(id, nombre, email, password, registerDate);
            return clienteActualizado;
        } catch (error) {
            console.error("Error en ActualizarClienteCasoUso", error);
            return null;
        }
    }
}
