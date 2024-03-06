import { Publicacion } from "../../dominio/entidades/Publicacion";
import { PublicacionRepositorio } from "../../dominio/repositorios/publicacion.repositorio"; 

export class GetByIdPublicacionCasoUso{
    constructor(readonly publicacionRepositorio:PublicacionRepositorio){}
    async run(id:number):Promise<Publicacion | null>{
        try {
            const publicacion = await this.publicacionRepositorio.getById(id);
            return publicacion;
        } catch (error) {
            console.error("Error en GetByIdPublicacionCasoUso",error);
            return null;
        }
    }
}