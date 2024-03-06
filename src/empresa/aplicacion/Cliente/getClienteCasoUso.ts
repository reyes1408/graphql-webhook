import signale from "signale";
import { Cliente } from "../../dominio/entidades/Cliente";
import { ClienteRepositorio } from "../../dominio/repositorios/cliente.repositorio";
import { IEncriptServicies } from "../services/EncriptAplicacion";
import { ServicesTokensUser } from "../services/TokensAplicacion";

export class GetClienteCasoUso{
    constructor(readonly clienteRepositorio:ClienteRepositorio, readonly iencriptServicies:IEncriptServicies, readonly servicesTokensUser:ServicesTokensUser){}

    async run(nombre:string, clave:string):Promise<[Cliente[], string] | null>{
        try {
            const cliente = await this.clienteRepositorio.getCliente(nombre,clave);
            const slats = "string";
            if(cliente != null){
                let clienteNew:Object = cliente[0];
                if("clave" in clienteNew){
                    let clave2 = clienteNew.clave
                    if(typeof clave2 == "string"){
                        const claveNew = await this.iencriptServicies.compareTo(clave,clave2);
                        if(claveNew){
                            let tokenNew = await this.servicesTokensUser.run(nombre,slats,100*100);
                                const data: any = [cliente, tokenNew];
                                return data;
                        }else{
                            return null;
                        }
                    }else{
                        return null;
                    }
                }else{
                    return null;
                }
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en GetClienteCasoUso",error);
            return null;
        }
    } 
}             