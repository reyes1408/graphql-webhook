import { PublicacionRepositorio } from "../../dominio/repositorios/publicacion.repositorio";

export class DeletePublicacionCasoUso{
    constructor(readonly publicacionRepositorio:PublicacionRepositorio){}

    async run(id:number):Promise<string | null>{
        try {
            const publicacion = await this.publicacionRepositorio.deletePublicacion(id);
            if(publicacion){
                return "Publicacion eliminada";
            }else{
                return "La publicacion no se pudo eliminar"
            }
        } catch (error) {
            console.log("Error en DeletePublicacionCasoUso",error);
            return null;
        }
    }
}