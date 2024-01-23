const server = require("./src/server")
const { conn } = require("./src/db")

conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log("El servidor esta levantado en el puerto 3001");
    })
}).catch(error => console.error(error))