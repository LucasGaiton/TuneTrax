const { Sequelize, DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Album", {
        name:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        sogns:{
            type: DataTypes.ARRAY(DataTypes.BLOB)
        },
        artist:{
            type:DataTypes.INTEGER
        }
    })

}