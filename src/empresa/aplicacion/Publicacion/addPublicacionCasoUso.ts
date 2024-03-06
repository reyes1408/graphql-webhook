import { Publicacion } from "../../dominio/entidades/Publicacion";
import { PublicacionRepositorio } from "../../dominio/repositorios/publicacion.repositorio";
import { IEncriptServicies } from "../services/EncriptAplicacion";

export class AddPublicacionCasoUso{
    constructor(
        readonly publicacionRepositorio:PublicacionRepositorio,
        readonly iencriptServicies: IEncriptServicies
    ){}

    async run(id:number,description:string,createDate:string,likes:number,userId:number):Promise<Publicacion | null>{
        try {
            const PublicacionCreada = await this.publicacionRepositorio.addPublicacion(id,description,createDate,likes,userId);
            return PublicacionCreada;
        } catch (error) {
            console.log("Error en AddPublicacionCasoUso",error);
            return null;
        }
    }
}