import express from "express";
import morgan from "morgan";
import signale, { Signale } from "signale";
import * as dotenv from "dotenv";
import helmet from "helmet"
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { correrBaseDatos } from "./database/database";
import { clienteRouter } from "./empresa/infraestructura/routes/cliente.routes";
import { ResolversGraph } from "./empresa/infraestructura/dependencies";
import { typeDefs } from "./empresa/infraestructura/graphQl/schema";

const app = express();
app.use(helmet.hidePoweredBy());
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use('/cliente', clienteRouter);

const port = 3000;

let resolvers = ResolversGraph.resolvers;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

(async () => {
  try {
    await correrBaseDatos();
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    signale.success(`servidor corriendo en ${url}`);
  } catch (error) {
    signale.error("Error al iniciar el servidor", error);
  }
})();