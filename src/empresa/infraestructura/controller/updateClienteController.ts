import { Request, Response } from "express";
import { UpdateClienteCasoUso } from "../../aplicacion/Cliente/updateClienteCasoUso";
import signale from "signale";

export class UpdateClienteController {
    constructor(readonly updateClienteCasoUso: UpdateClienteCasoUso) {}

    async run(req: Request, res: Response) {
        try {
            const { id, nombre, email, password, registerDate } = req.body.cliente;
            signale.info(req.body);

            // Verificar si se proporciona el ID del cliente en la solicitud
            if (!id) {
                return res.status(400).send({
                    status: "error",
                    message: "Se requiere el ID del cliente para actualizarlo.",
                });
            }

            // Ejecutar el caso de uso para actualizar el cliente
            const clienteActualizado: any = await this.updateClienteCasoUso.run(id, nombre, email, password, registerDate);

            // Verificar si el cliente se actualizó correctamente
            if (clienteActualizado) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        id: clienteActualizado.id,
                        nombre: clienteActualizado.nombre,
                        email: clienteActualizado.email,
                        password: clienteActualizado.password,
                        registerDate: clienteActualizado.registerDate,
                    },
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    message: `No se pudo encontrar o actualizar el cliente con ID ${id}.`,
                });
            }
        } catch (error) {
            signale.error("Error en UpdateClienteController", error);
            res.status(500).send({
                status: "error",
                message: "Error en el servidor",
            });
        }
    }
}
