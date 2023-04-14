const { Router } = require('express')

const Usercontroller = require('./app/controllers/Usercontroller');

const routes = new Router();

routes.post('/cadastrar', Usercontroller.store);

module.exports = routes;