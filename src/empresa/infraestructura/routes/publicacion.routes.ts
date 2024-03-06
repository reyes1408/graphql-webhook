// import express from 'express';
// import { addPublicacionController, getPublicacionController } from '../dependencies';

// export const publicacionRouter = express.Router();

// publicacionRouter.post("/", (req,res)=>{
//     addPublicacionController.run(req,res)
//     .then(()=>{
//         return null;
//     })
//     .catch(error=>{
//         console.log(error);
//         res.status(500).send("Error en el archivo publicacion.routes.ts en post")
//     });
// });

// publicacionRouter.get("/login",(req,res)=>{
//     getPublicacionController.run(req,res)
//     .then(()=>{
//         return null;
//     })
//     .catch(error=>{
//         console.error(error);
//         res.status(500).send("Error en el archivo admin.routes.ts en get")        
//     })
// })