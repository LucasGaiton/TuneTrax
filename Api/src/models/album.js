const { Sequelize, DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Album", {
        name:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        sogns:{
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        artist:{
            type:DataTypes.INTEGER
        }
    })

}