//importmas sequelize
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgresql://uixmnmeayqczb1igxjwu:qQR6KolwWYIxkNtXftKN359chNoDKa@b4iolbwy6swxmxen1eyd-postgresql.services.clever-cloud.com:50013/b4iolbwy6swxmxen1eyd", {
    logging: false, // set to console.log to see the raw SQL queries
    native: false
})


// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

module.exports = {
    conn: sequelize
}
