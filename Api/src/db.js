//importmas sequelize
const { Sequelize } = require("sequelize")
const fs = require("fs")
const path = require("path");
const basename = path.basename(__filename);

//INtanciamos sequelize
const sequelize = new Sequelize("postgresql://uixmnmeayqczb1igxjwu:qQR6KolwWYIxkNtXftKN359chNoDKa@b4iolbwy6swxmxen1eyd-postgresql.services.clever-cloud.com:50013/b4iolbwy6swxmxen1eyd", {
    logging: false, // set to console.log to see the raw SQL queries
    native: false
})

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

module.exports = {
    conn: sequelize
}
