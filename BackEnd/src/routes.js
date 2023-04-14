const { Router } = require('express')

const Usercontroller = require('./app/controllers/Usercontroller');
const SessionsController = require('./app/controllers/SessionsController');


const authMiddleware = require('./app/middlewares/auth');
const routes = new Router();


routes.post('/cadastrar', Usercontroller.store);
routes.post('/session', SessionsController.store);

routes.use(authMiddleware);
routes.get('/user', Usercontroller.show);

module.exports = routes;