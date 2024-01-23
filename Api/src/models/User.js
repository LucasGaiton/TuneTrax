const {Sequelize} = require("sequelize")  
const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("User", {
        id:{
            type: DataTypes.UUID,
            defaultValue:Sequelize.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        playLists:{
            type:DataTypes.ARRAY(DataTypes.JSON)
        },
        favorites:{
            type:DataTypes.ARRAY(DataTypes.INTEGER)
        },
        savedSongs:{
            type:DataTypes.ARRAY(DataTypes.INTEGER)
        }

    })

}