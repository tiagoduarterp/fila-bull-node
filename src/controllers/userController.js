const { json } = require("express/lib/response");
const Queue = require("../lib/Queue");
//import Mail from '../mail/mail';

const Mail = require("../mail/mail");

class oUser{
    constructor(){ }
   async user(req, res, next){
        const {name, email, password} = req.body;

        const user = {
            name,
            email,
            password,
        }

    /*    await Mail.sendMail({
            from: 'Queue teste',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuario',
            html: `Ola, ${name}, Bem vindo ao sistema de filas de filas-bull`
        }) */
        await Queue.add('RegistrationMail', { user });

        await Queue.add('UserReport', { user });

        return res.json(user);
    
      }

}//end class

module.exports = new oUser();