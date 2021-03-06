const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const dbConnection = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: "/api/auth",
      categories: "/api/categories",
      find: "/api/find",
      products: "/api/products",
      users: "/api/users",
      uploads: "/api/uploads",
      webhook: "/webhook",
    };

    // conectar con la base de datos
    this.conectarDB();

    // middlewares
    this.middlewares();

    // routes
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // lectura y parseo del body
    this.app.use(express.json());

    // directorio publico
    this.app.use(express.static("public"));

    // express-fileupload - Carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.categories, require("../routes/categories"));
    this.app.use(this.paths.find, require("../routes/find"));
    this.app.use(this.paths.products, require("../routes/products"));
    this.app.use(this.paths.users, require("../routes/users"));
    this.app.use(this.paths.uploads, require("../routes/uploads"));
    this.app.use(this.paths.webhook, require("../routes/webhook"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor en el puerto", this.port);
    });
  }
}

module.exports = Server;
