const dataModels = require("../models/dataModels")

const mainController = {
    homePage: async (req, res, next) => {
        try {
            const coffeesFound = await dataModels.get3LastCoffees();

            if (!coffeesFound) {
                return next();
            }
            res.render("acceuil", {
                coffees: coffeesFound

            });
        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des cafés');
        }
    },

    catalogPage: async (req, res, next) => {

        try {
            const coffeesFound = await dataModels.getAllCoffees();
            const categories = await dataModels.getAllCategory();

            if (!coffeesFound || !categories) {
                return next();
            }

            res.render("catalog", {
                coffees: coffeesFound,
                categories: categories,
            });


        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des cafés');
        }
    },

    detailPage: async (req, res, next) => {
        const id = Number(req.params.coffeeId)
        try {
            const coffeeFound = await dataModels.getOneCoffee(id);

            if (!coffeeFound) {
                return next();
            }

            res.render("detail", {
                coffee: coffeeFound,
            });
        } catch (error) {
            res.status(500).send('Erreur lors de la récupération du café');
        }
    },

    contactPage: (req, res) => {
        res.render("contact")
    },

    shopPage: async (req, res, next) => {

        try {
            const coffeesFound = await dataModels.getAllCoffees();
            const categories = await dataModels.getAllCategory();

            if (!coffeesFound || !categories) {
                return next();
            }

            res.render("shop", {
                coffees: coffeesFound,
                categories: categories,
            });


        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des cafés');
        }
    },


}

module.exports = mainController