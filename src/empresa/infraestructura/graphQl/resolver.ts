import { AddClienteCasoUso } from "../../aplicacion/Cliente/addClienteCasoUso";
import { UpdateClienteCasoUso } from "../../aplicacion/Cliente/updateClienteCasoUso"
import { GetClienteCasoUso } from "../../aplicacion/Cliente/getClienteCasoUso";
import { GetAllClienteCasoUso } from "../../aplicacion/Cliente/getAllClientesCasoUso";

import { AddPublicacionCasoUso } from "../../aplicacion/Publicacion/addPublicacionCasoUso";
import { GetByIdPublicacionCasoUso } from "../../aplicacion/Publicacion/getByIdPublicacionCasoUso";
import { PutPublicacionCasoUso } from "../../aplicacion/Publicacion/putPublicacionCasoUso";
import { DeletePublicacionCasoUso } from "../../aplicacion/Publicacion/deletePublicacionCasoUso";
import { GetAllPublicacionCasoUso } from "../../aplicacion/Publicacion/getAllPublicacionesCasoUso";

export class Resolvers{
    constructor(
        readonly addClienteCasoUso:AddClienteCasoUso,
        readonly updateClienteCasoUso: UpdateClienteCasoUso,
        readonly getClienteCasoUso:GetClienteCasoUso,
        readonly getAllClienteCasoUso:GetAllClienteCasoUso,

        readonly addPublicacionCasoUso:AddPublicacionCasoUso,
        readonly getByIdPublicacionCasoUso:GetByIdPublicacionCasoUso,
        readonly putPublicacionCasoUso:PutPublicacionCasoUso,
        readonly deletePublicacionCasoUso:DeletePublicacionCasoUso,
        readonly getAllPublicacionCasoUso:GetAllPublicacionCasoUso 
    ){}

    resolvers: any={
        Query:{ 
            //datos de cliente para el login
            cliente:async(_:void,args:any)=>{                 
                const cliente = await this.getClienteCasoUso.run(args.cliente.nombre, args.cliente.password);
                console.log(cliente);
                
                return cliente;
            },

            //definicion del metodo para conseguir todos los usuarios
            clientes:async()=>{
                const clientes = await this.getAllClienteCasoUso.run();
                console.log(clientes);
                return clientes;
            },

            //definicion del metodo para conseguir todos los publicaciones
            publicaciones:async()=>{
                const publicaciones = await this.getAllPublicacionCasoUso.run();
                console.log(publicaciones);
                return publicaciones;
            },

            //Buscar por id al publicacion
            publicacionById:async(_:void,args:any)=>{
                const publicacion = await this.getByIdPublicacionCasoUso.run(args.cliente.id);
                return publicacion;
            }
        },

        Mutation:{
            //cracion del cliente creando el objeto con los parametros declarados en esquema
            crearCliente:async(_:void, args:any)=>{
                const cliente = await this.addClienteCasoUso.run(args.cliente.nombre, args.cliente.email, args.cliente.password, args.cliente.registerDate);
                return cliente;
            },

            //Actualización de usuario.
            updateCliente: async (_: void, args: any) => {
                const { id, nombre, email, password, registerDate } = args.cliente;
                
                try {
                    const clienteActualizado = await this.updateClienteCasoUso.run(id, nombre, email, password, registerDate);
                    return clienteActualizado;
                } catch (error) {
                    console.error("Error al actualizar cliente:", error);
                    throw new Error("No se pudo actualizar el cliente");
                }
            },
            

            //cracion del publicacion creando el objeto con los parametros declarados en esquema
            crearPublicacion:async(_:void,args:any)=>{
                const publicacion = await this.addPublicacionCasoUso.run(args.cliente.id,args.cliente.description,args.cliente.createDate,args.cliente.likes,args.cliente.userId);
                return publicacion;
            },

            //modificar el publicacion del atributo clientePrincipal
            putPublicacionclientePrin:async(_:void, args:any)=>{
                const publicacion = await this.putPublicacionCasoUso.run(args.cliente.id, args.cliente.userId);
                return publicacion;
            },

            //eliminar el publicacion
            deletePublicacion:async(_:void, args:any)=>{
                const publicacionEliminado = await this.deletePublicacionCasoUso.run(args.cliente.id);
                return publicacionEliminado;
            }
        }
    }
}