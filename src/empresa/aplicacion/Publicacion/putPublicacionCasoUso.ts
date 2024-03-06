import { Publicacion } from "../../dominio/entidades/Publicacion";
import { PublicacionRepositorio } from "../../dominio/repositorios/publicacion.repositorio";

export class PutPublicacionCasoUso{
    constructor(readonly publicacionRepositorio:PublicacionRepositorio){}
    async run(id:number, personajePrin:string):Promise <Publicacion | null>{
        try {
            const publicacion = await this.publicacionRepositorio.putPublicacionpersonajePrin(
                id,
                personajePrin
            );
            return publicacion;
        } catch (error) {
            console.error("Error en PutPublicacionCasoUso",error);
            return null;
        }
    }
}