import { Column, Table ,Model, DataType } from "sequelize-typescript";

@Table({
    tableName:"publicaciones",
    timestamps:false
})
class PublicacionModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement: true
    })
    public id!: number;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    public description!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    public createDate!:string

    @Column({
        type:DataType.INTEGER,
        allowNull: false
    })
    public likes!:number

    @Column({
            type: DataType.INTEGER,
            references: {
              model: 'clientes',
              key: 'id',
            }
    }) public userId!:number
}

export default PublicacionModel;