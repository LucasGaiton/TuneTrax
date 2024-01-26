const {Sequelize, DataTypes} = require("sequelize")

module.exports = (sequelize)=>{
    sequelize.define("Song", {
        name:{
            type: DataTypes.STRING,
        },
        data:{
            type:DataTypes.BLOB,
            allowNull:false

        },
        photo:{
            type: DataTypes.STRING
        },
        duration:{
            type:DataTypes.STRING
        },
        artists:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        }

    })


}