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
        name:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        photo:{
            type:DataTypes.STRING

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