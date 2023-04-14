const Sequelize = require('sequelize');
const databaseConfig = require('../config/database.js');
const User = require('../app/models/user.js');

const models = [User]

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection))
    }
}

module.exports = new Database()