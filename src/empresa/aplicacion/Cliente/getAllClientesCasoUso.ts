import { Cliente } from "../../dominio/entidades/Cliente";
import { ClienteRepositorio } from "../../dominio/repositorios/cliente.repositorio";

export class GetAllClienteCasoUso{
    constructor(readonly clienteRepositorio:ClienteRepositorio){}

    async run():Promise<Cliente[] | null>{
        try {
            const cliente = await this.clienteRepositorio.getAllClientes();
            return cliente;
        } catch (error) {
            console.error("Error en GetAllClienteCasoUso",error);
            return null;
        }
    }
}