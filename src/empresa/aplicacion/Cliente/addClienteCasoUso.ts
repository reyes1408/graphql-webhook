import { Cliente } from "../../dominio/entidades/Cliente";
import { ClienteRepositorio } from "../../dominio/repositorios/cliente.repositorio";
import { IEncriptServicies } from "../services/EncriptAplicacion";

export class AddClienteCasoUso{
    constructor(
        readonly clienteRepositorio:ClienteRepositorio,
        // readonly iencriptServicies: IEncriptServicies
    ){}      

    async run(nombre:string,email:string,password:string, registerDate:string):Promise<Cliente | null>{
        try {
            // const EncryPassword=await this.iencriptServicies.encodePassword(password);
            const ClienteCreado = await this.clienteRepositorio.addCliente(nombre,email,password,registerDate);
            return ClienteCreado;
        } catch (error) {
            console.error("Error en AddClienteCasoUso",error);
            return null;
        }
    }
}