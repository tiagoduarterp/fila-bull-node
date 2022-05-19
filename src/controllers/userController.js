const { json } = require("express/lib/response");
const Queue = require("../lib/Queue");

const Mail = require("../mail/mail");

class oUser{
   async user(req, res, next){
        const {name, email, password} = req.body;

        const user = {
            name,
            email,
            password,
        }

        await Queue.add('RegistrationMail', { user });

        await Queue.add('UserReport', { user });

        return res.json(user);
    
    }

}//end class

module.exports = new oUser();