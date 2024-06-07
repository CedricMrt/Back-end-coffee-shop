require("dotenv").config();

const express = require("express")
const router = require("./app/router");
const session = require('express-session');

const PORT = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 2 * 60 * 60 * 1000,
    },
}));

app.use((req, res, next) => {
    if (!req.session.user) {
        req.session.user = [];

    } res.locals.user = req.session.user
    next();
})




app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

