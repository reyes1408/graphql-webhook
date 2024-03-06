import { AddClienteCasoUso } from "../aplicacion/Cliente/addClienteCasoUso";
import { GetClienteCasoUso } from "../aplicacion/Cliente/getClienteCasoUso";
import { GetAllClienteCasoUso } from "../aplicacion/Cliente/getAllClientesCasoUso";
import { AddPublicacionCasoUso } from "../aplicacion/Publicacion/addPublicacionCasoUso";
import { GetAllPublicacionCasoUso } from "../aplicacion/Publicacion/getAllPublicacionesCasoUso";
import { PutPublicacionCasoUso } from "../aplicacion/Publicacion/putPublicacionCasoUso";
import { GetByIdPublicacionCasoUso } from "../aplicacion/Publicacion/getByIdPublicacionCasoUso";
import { DeletePublicacionCasoUso } from "../aplicacion/Publicacion/deletePublicacionCasoUso";
import { ServicesTokensUser } from "../aplicacion/services/TokensAplicacion";
import { SqlClienteReporitorio } from "./sqlCliente.repositorio";
import { SqlPublicacionRepositorio } from "./sqlPublicacion.repositorio";
import { EncriptServiHelpers } from "./helpers/Encrypt-helper";
import { ServiceTokenInfra } from "./helpers/JwtInfraestructura";
import { AddClienteController } from "./controller/addClienteController";
import { UpdateClienteController } from "./controller/updateClienteController";
import { UpdateClienteCasoUso } from "../aplicacion/Cliente/updateClienteCasoUso";
import { GetClienteController } from "./controller/getClienteController";
//import { AddPublicacionController } from "./controller/addPublicacionController";
//import { GetPublicacionController } from "./controller/getPublicacionController";

import { Resolvers } from "./graphQl/resolver";

const sqlClienteReporitorio = new SqlClienteReporitorio();
const sqlPublicacionRepositorio= new SqlPublicacionRepositorio();
const encriptServiHelpers = new EncriptServiHelpers();
const serviceTokenInfra = new ServiceTokenInfra();

const servicesTokensUser = new ServicesTokensUser(serviceTokenInfra);


const addClienteCasoUso = new AddClienteCasoUso(
    sqlClienteReporitorio,
    // encriptServiHelpers
);

const updateClienteCasoUso = new UpdateClienteCasoUso(
    sqlClienteReporitorio
)

const getClienteCasoUso = new GetClienteCasoUso(
    sqlClienteReporitorio,
    encriptServiHelpers,
    servicesTokensUser
);

const getAllClienteCasoUso = new GetAllClienteCasoUso(sqlClienteReporitorio);
const addPublicacionCasoUso = new AddPublicacionCasoUso(sqlPublicacionRepositorio,encriptServiHelpers);

const getAllPublicacionCasoUso = new GetAllPublicacionCasoUso(sqlPublicacionRepositorio);

const putPublicacionCasoUso = new PutPublicacionCasoUso(sqlPublicacionRepositorio);
const getByIdPublicacionCasoUso = new GetByIdPublicacionCasoUso(sqlPublicacionRepositorio);
const deletePublicacionCasoUso = new DeletePublicacionCasoUso(sqlPublicacionRepositorio);


export const getClienteController = new GetClienteController(getClienteCasoUso);
export const addClienteController = new AddClienteController(addClienteCasoUso);
export const updateClienteController = new UpdateClienteController(updateClienteCasoUso);

export const ResolversGraph = new Resolvers(addClienteCasoUso, updateClienteCasoUso,getClienteCasoUso,getAllClienteCasoUso,addPublicacionCasoUso,getByIdPublicacionCasoUso,putPublicacionCasoUso,deletePublicacionCasoUso,getAllPublicacionCasoUso);

//export const getPublicacionController = new GetPublicacionController(getPublicacionCasoUso)
//export const addPublicacionController = new AddPublicacionController(addPublicacionCasoUso)