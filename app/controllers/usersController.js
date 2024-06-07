const usersModels = require("../models/usersModels");
const dataModels = require("../models/dataModels")

const usersController = {
    loginPage: (req, res) => {
        res.render("users")
    },


    userLogin: async (req, res,) => {
        const User = await usersModels.validateUser(req.body);

        if (!User) {
            res.status(401).jsonp("email ou mot de passe invalide!");

        }
        req.session.user = User

        res.status(200).redirect("/")

    },

}

module.exports = usersController;
