import { Column, Table ,Model, DataType } from "sequelize-typescript";

@Table({
    tableName:"clientes",
    timestamps:false
})
class ClienteModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    })
    public id!: number;

    @Column({
        type:DataType.STRING,
        allowNull: true
        
    })
    public nombre!:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    public email!:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    public password!:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    public registerDate!:string
}

export default ClienteModel;