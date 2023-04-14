const jwt = require('jsonwebtoken');
const User = require('../models/user');

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
            token :jwt.sign({id}, '7a503b7b2e1b1801a1c288dfb2190f20', {
                expiresIn: '7d',
            })
        })
    }
}

module.exports = new SessionsController();