const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = require('../../config/auth');
class SessionsController {
    async store(req,res){
        const { email,password } = req.body;

        //verificando se o email existw.
        const user = await User.findOne({
            where: { email: email}
        });

        if(!user){
            return res.status(401).json({
                err: 'usuário não existe'
            })
        }


        // Verificar se a senha não parte
        if(!(await user.checkPassword(password))){
            return res.status(401).json({
                err: 'senha incorreta'
            })
        }
        
        const { id, name } = user;


        return res.json({
            user: {
                id, 
                name,
                email
            },
            token :jwt.sign({id}, auth.secret, {
                expiresIn: auth.expires,
            })
        })
    }
}

module.exports = new SessionsController();