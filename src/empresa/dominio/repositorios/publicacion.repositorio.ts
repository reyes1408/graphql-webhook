import { Publicacion } from "../entidades/Publicacion";

export interface PublicacionRepositorio{    

    addPublicacion(id:number,description:string,createDate:string,likes:number,userId:number):Promise<Publicacion | null>

    getById(id:number):Promise<Publicacion | null>
    putPublicacionpersonajePrin(
        id:number,
        personajePrin:string
    ):Promise<Publicacion | null>;
    deletePublicacion(id:number):Promise<Publicacion | null>;

    getAllPublicaciones():Promise<Publicacion[] | null>
}