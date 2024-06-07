const express = require('express');
const mainController = require('./controllers/mainController');
const usersController = require('./controllers/usersController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get("/catalog", mainController.catalogPage);

router.get("/detail/:coffeeId", mainController.detailPage);

router.post("/catalog", mainController.catalogPage);

router.get("/contact", mainController.contactPage);

router.get("/users", mainController.contactPage);

router.get("/login", usersController.loginPage);
router.post("/login", usersController.userLogin);

router.get("/shop", mainController.shopPage);

router.use((req, res) => {
    res.status(404).render("pagesNotFound");
});
module.exports = router;