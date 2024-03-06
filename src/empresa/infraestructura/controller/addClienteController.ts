import { Request, Response } from "express";
import { AddClienteCasoUso } from "../../aplicacion/Cliente/addClienteCasoUso";
import signale from "signale";

export class AddClienteController{
    constructor(readonly addClienteCasoUso:AddClienteCasoUso){}

    async run(req:Request, res:Response){
        try {
            let nombre = req.body.cliente.nombre;
            let email = req.body.cliente.email;
            let password = req.body.cliente.password;
            let registerDate = req.body.cliente.registerDate;
            signale.info(req.body)

            const clienteCreado:any = await this.addClienteCasoUso.run(nombre,email,password,registerDate);
            console.log(clienteCreado);
            
            if(clienteCreado){
                return res.status(200).send({
                    status: "success",
                    data: {
                        nombre: clienteCreado.nombre,
                        email:clienteCreado.email,
                        password:clienteCreado.password,
                        registerDate:clienteCreado.registerDate,
                      },
                });
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error registrar cliente en addClienteController.ts"
                })
            }
        } catch (error) {
            signale.error("Error en addClienteController",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}