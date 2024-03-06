import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Cliente{
        id:Int
        nombre:String
        email:String
        password:String
        registerDate:String
    }

    type Publicacion{
        id:Int
        description:String
        createDate:String
        likes:Int
        userId:Int
    }

    type Query{
        cliente(nombre:String, password:String):Cliente
        clientes:[Cliente]
        publicaciones:[Publicacion]
        publicacionById(id:ID):Publicacion
    }

    input clienteInput{
        id:Int
        nombre:String
        email:String
        password:String
        registerDate:String
    }

    input publicacionInput{
        id:Int
        description:String
        createDate:String
        likes:Int
        userId:Int
    }

    type Mutation{
        crearCliente(cliente:clienteInput):Cliente
        updateCliente(cliente: clienteInput):Cliente
        crearPublicacion(publicacion:publicacionInput):Publicacion
        putPublicacionclientePrin(publicacion:publicacionInput):Publicacion
        deletePublicacion(id:Int):String
    }
`