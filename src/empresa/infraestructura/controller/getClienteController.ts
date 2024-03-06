import { Request, Response } from "express";
import { GetClienteCasoUso } from "../../aplicacion/Cliente/getClienteCasoUso";

export class GetClienteController{
    constructor(readonly getClienteCasoUso:GetClienteCasoUso){}
    async run(req:Request, res:Response){
        const {nombre, password} = req.body;

        try {
            const personaje = await this.getClienteCasoUso.run(nombre,password);
            if(personaje){
                res.status(200).header({token:nombre?.[1]}).json({
                    status:"success",
                    data:"Datos correctos"
                });
            }else{
                res.status(400).json({
                    message:"Datos incorrectos",
                    error:"No fue posible encontrar el cliente",
                    data:[]
                });
            }
        } catch (error) {
            console.log("Error en getClienteController.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}