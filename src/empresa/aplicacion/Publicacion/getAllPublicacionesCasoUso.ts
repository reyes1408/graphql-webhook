import { Publicacion } from "../../dominio/entidades/Publicacion";
import { PublicacionRepositorio } from "../../dominio/repositorios/publicacion.repositorio";

export class GetAllPublicacionCasoUso{
    constructor(readonly publicacionRepositorio:PublicacionRepositorio ){}

    async run():Promise<Publicacion[] | null>{
        try {
            const publicacion = await this.publicacionRepositorio.getAllPublicaciones();
            return publicacion;
        } catch (error) {
            console.error("Error en getAllPublicacionCasoUso",error);
            return null;
        }
    }
}