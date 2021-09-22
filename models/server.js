const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // middlewares (always executed once the server is up)
    this.middlewares();
    // routes
    this.routes();
  }

  middlewares() {
    // public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
