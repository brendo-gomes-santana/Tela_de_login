const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class User extends Model {
    static init (sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                data_de_nascimento: Sequelize.DATE,
                contato: Sequelize.STRING,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )
    }
}

module.exports = User;