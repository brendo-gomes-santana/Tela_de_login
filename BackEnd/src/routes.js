const { Router } = require('express')

const Usercontroller = require('./app/controllers/Usercontroller');
const SessionsController = require('./app/controllers/SessionsController');

const routes = new Router();


routes.post('/cadastrar', Usercontroller.store);
routes.post('/session', SessionsController.store);

module.exports = routes;