import { Publicacion } from "../dominio/entidades/Publicacion";
import { PublicacionRepositorio } from "../dominio/repositorios/publicacion.repositorio";
import PublicacionModel from "./Model/Publicacion";

export class SqlPublicacionRepositorio implements PublicacionRepositorio{
    async addPublicacion(id:number,description:string,createDate:string,likes:number,userId:number):Promise<Publicacion | null>{
        try {
            const publicacionCreada = await PublicacionModel.create({id,description,createDate,likes,userId});
            return new Publicacion(publicacionCreada.id,publicacionCreada.description,publicacionCreada.createDate,publicacionCreada.likes,publicacionCreada.userId);
        } catch (error) {
            console.log("Error en sqlPublicacion.repositorio en addPublicacion", error);
            return null;
        }
    }

    async getById(id:number):Promise<Publicacion | null>{
        try {
            const getByIdPublicacion = await PublicacionModel.findOne({where:{id:id}});
            if(getByIdPublicacion){
                await getByIdPublicacion.get();
                return new Publicacion(getByIdPublicacion.id,getByIdPublicacion.description,getByIdPublicacion.createDate,getByIdPublicacion.likes,getByIdPublicacion.userId);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlPublicacion.repositorio en getByIdPublicacion", error);
            return null;
        }
    }

    async putPublicacionpersonajePrin(id:number,personajePrin:string):Promise<Publicacion | null>{
        try {
            const putPublicacionPersonajePrin = await PublicacionModel.findByPk(id);
            if(putPublicacionPersonajePrin){
                await putPublicacionPersonajePrin.update({personajePrin});
                return putPublicacionPersonajePrin;
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlPublicacion.repositorio en putPublicacionpersonajePrin", error);
            return null;
        }        
    }

    async deletePublicacion(id:number):Promise<Publicacion | null>{
        try {
            const publicacionEliminada = await PublicacionModel.findOne({where:{id:id}});
            if(publicacionEliminada){
                await publicacionEliminada.destroy();
                return new Publicacion(publicacionEliminada.id,publicacionEliminada.description,publicacionEliminada.createDate,publicacionEliminada.likes,publicacionEliminada.userId);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlPublicacion.repositorio en deletePublicacion", error);
            return null;
        }
    }

    async getAllPublicaciones():Promise<Publicacion[] | null>{
        try {
            const publicacion = await PublicacionModel.findAll();
            return publicacion.map(p=>({
                id:p.id,
                description:p.description,
                createDate:p.createDate,
                likes:p.likes,
                userId:p.userId,
            }))
        } catch (error) {
            console.log("Error en sqlCliente.repositorio en getAllClientes", error);
            return null;
        }
    }
}