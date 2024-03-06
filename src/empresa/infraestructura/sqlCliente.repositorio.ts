import { Cliente } from "../dominio/entidades/Cliente";
import { ClienteRepositorio } from "../dominio/repositorios/cliente.repositorio";
import ClienteModel from "./Model/Cliente";

export class SqlClienteReporitorio implements ClienteRepositorio {
  async addCliente(
    nombre: string,
    email: string,
    password: string,
    registerDate: string,
  ): Promise<Cliente | null> {
    try {

      const clienteCreado = await ClienteModel.create({
        nombre,
        email,
        password,
        registerDate,
      });
      return new Cliente(
        clienteCreado.nombre,
        clienteCreado.email,
        clienteCreado.password,
        clienteCreado.registerDate,
      );
    } catch (error) {
      console.log("Error en sqlCliente.repositorio en addCliente", error);
      return null;
    }
  }

  async updateCliente(
    id: number,
    nombre: string,
    email: string,
    password: string,
    registerDate: string
  ): Promise<Cliente | null> {
    try {
      // Buscar el cliente por su ID
      const clienteExistente = await ClienteModel.findByPk(id);

      // Verificar si el cliente existe
      if (!clienteExistente) {
        console.error(`Cliente con ID ${id} no encontrado.`);
        return null;
      }

      // Actualizar los campos del cliente
      clienteExistente.nombre = nombre;
      clienteExistente.email = email;
      clienteExistente.password = password;
      clienteExistente.registerDate = registerDate;

      // Guardar los cambios en la base de datos
      await clienteExistente.save();

      // Crear un objeto Cliente con los datos actualizados
      return new Cliente(
        clienteExistente.nombre,
        clienteExistente.email,
        clienteExistente.password,
        clienteExistente.registerDate
      );
    } catch (error) {
      console.error("Error en sqlCliente.repositorio en updateCliente", error);
      return null;
    }
  }


  //AQUI EN EL RETORNO EL STRING SE ESTA MANDANDO VACIO PERO DEBE DE ENVIARSE EL TOKEN EN ESE STRING
  async getCliente(
    nombre: string,
    password: string
  ): Promise<[Cliente, string] | null> {
    try {
      console.log(nombre, password.toString());

      const getSignCliente = await ClienteModel.findOne({
        where: { nombre: nombre },
      });
      console.log(getSignCliente);

      if (getSignCliente) {
        await getSignCliente.get();
        return [
          new Cliente(
            getSignCliente.nombre,
            getSignCliente.email,
            getSignCliente.password,
            getSignCliente.registerDate,
          ),
          "",
        ];
      } else {
        return null;
      }
    } catch (error) {
      console.log("Error en sqlCliente.repositorio en getCliente", error);
      return null;
    }
  }

  async getAllClientes(): Promise<Cliente[] | null> {
    try {
      const clientes = await ClienteModel.findAll();
      console.log(clientes);

      return clientes.map((c) => ({
        nombre: c.nombre,
        email: c.email,
        password: c.password,
        registerDate: c.registerDate,
      }));
    } catch (error) {
      console.log(
        "Error en sqlCliente.repositorio en getAllClientes",
        error
      );
      return null;
    }
  }
}
