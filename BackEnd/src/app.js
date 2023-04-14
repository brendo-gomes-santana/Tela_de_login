const express = require('express');
const routes = require('./routes');


//importando nossa database
require('./database/index');

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}
module.exports = new App().server;