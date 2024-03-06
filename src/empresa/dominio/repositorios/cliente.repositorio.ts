import { Cliente } from "../entidades/Cliente";

export interface ClienteRepositorio{    
    addCliente(nombre:string,email:string,password:string,registerDate:string):Promise<Cliente | null>;
    updateCliente(id: number, nombre:string,email:string,password:string,registerDate:string):Promise<Cliente | null>;
    getCliente(nombre:string, clave:string):Promise<[Cliente, string] | null>;
    getAllClientes():Promise<Cliente[] | null>;
}