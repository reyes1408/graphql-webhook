import express from 'express';
import { addClienteController, getClienteController } from '../dependencies';

export const clienteRouter = express.Router();

clienteRouter.post("/", (req,res)=>{
    addClienteController.run(req,res)
    .then(()=>{
        return null;
    })
    .catch(error=>{
        console.log(error);
        res.status(500).send("Error en el archivo cliente.routes.ts en post")
    });
});

clienteRouter.get("/login",(req,res)=>{
    getClienteController.run(req,res)
    .then(()=>{
        return null;
    })
    .catch(error=>{
        console.error(error);
        res.status(500).send("Error en el archivo admin.routes.ts en get")        
    })
})