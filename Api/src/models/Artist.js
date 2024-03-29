const { Sequelize } = require("sequelize")

const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    //Definimos modelo dendotro del objeto 
    sequelize.define('Artist', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,

        },
        name:{
            type:DataTypes.STRING,

        },
        songsId: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),

        },
        albums: {
            type: DataTypes.ARRAY(DataTypes.INTEGER) //Aca vamos a meter el id del album
        },
        followers: {
            type: DataTypes.INTEGER,


        }

    })
}
