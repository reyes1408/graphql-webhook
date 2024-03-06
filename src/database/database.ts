import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Signale } from "signale";
import ClienteModel from "../empresa/infraestructura/Model/Cliente";
import PublicacionModel from "../empresa/infraestructura/Model/Publicacion";

dotenv.config();

const signale = new Signale();

export const sequelize = new Sequelize({
  dialect:"mysql",
  database:process.env.DB,
  username: process.env.USER, 
  password: process.env.PASSWORD,
  host:process.env.HOST,
  port:3306,
  models:[ClienteModel,PublicacionModel]
});

export async function correrBaseDatos(){
  try {
      await sequelize.authenticate();
      signale.success("Conexión lograda");
      await sequelize.sync({force:false});
  } catch (error) {
      signale.error("No se puede conectar a la base de datos", error);
  }
}
