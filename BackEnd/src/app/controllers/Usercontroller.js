const User = require('../models/user.js');

class Usercontroller {
    async store(req,res){
        const { id, name, email, contato,  data_de_nascimento, password_hash} = await User.create(req.body);

        const existEmail = await User.findOne({
            where: { email: req.body.email }
        });

        if(existEmail){
            return res.status(400).json({err: 'email já cadastrado'})
        }


        return res.json({
            id,
            name,
            email,contato,  data_de_nascimento, password_hash
        })
    }
}

module.exports = new Usercontroller();