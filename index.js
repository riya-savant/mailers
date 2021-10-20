// Importing node modules
const express = require("express");
const path = require("path");

// Initializing express app
const app = express();

// Setting our view engine to pug
app.set("view engine", "pug");

// Setting our default views
app.set("views", __dirname + "/views");

app.get("/30", (req, res) => {
    res.render("renewals/30");
});

app.get("/10", (req, res) => {
    res.render("renewals/10");
});

app.get("/last", (req, res) => {
    res.render("renewals/last");
});

app.get("/expired", (req, res) => {
    res.render("renewals/expired");
});

app.get("/example", (req, res) => {
    res.render("example");
})

app.get("/confirm", (req, res) => {
    res.render("invoice/confirm");
})

app.get("/cancel", (req, res) => {
    res.render("invoice/cancel");
})

app.get("/cp/renewal", (req, res) => {
    res.render("cp/renewal");
});

app.get("/cp/onboard", (req, res) => {
    res.render("cp/onboarding");
});

// Listening our app on port 3000
app.listen(3000);