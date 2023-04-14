const User = require('../models/user.js');

class Usercontroller {
    async store(req,res){

        //verificação sempre tem que vim antes.
        const verificarEmail = await User.findOne({
            where: { email: req.body.email }
        });
        
        if(verificarEmail){
            return res.status(400).json({
                err: 'usuário já existe'
            })
        }
        // cadastrando                              // como o Sequelize já tá mandando só que precisa, não é necessário falar um por um.
        const { id, name, email } = await User.create(req.body);

        return res.json({
            id,
            name,
            email
        })
    }

    async show(req,res){
        const user = await User.findByPk(req.userId)

        return res.json(user)
    }
}

module.exports = new Usercontroller();