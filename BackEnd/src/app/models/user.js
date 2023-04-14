const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs')
const { Model } = require('sequelize');

class User extends Model {
    static init (sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                data_de_nascimento: Sequelize.DATE,
                contato: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        this.addHook('beforeSave', async (user)=> {
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        });

        return this;
    }

    checkPassword(password){
        
        //vai fazer uma comparação entre a senha que o usuário colocou com a senha que tá no banco de dados.
        return bcrypt.compare(password, this.password_hash);

    }
}

module.exports = User;