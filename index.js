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

app.get("/header", (req, res) => {
    res.render("components/header");
});

app.get("/greeting", (req, res) => {
    res.render("components/greeting");
});

app.get("/offer", (req, res) => {
    res.render("components/offer");
});

app.get("/footer-text", (req, res) => {
    res.render("components/footer-text");
});

app.get("/footer", (req, res) => {
    res.render("components/footer");
});

app.get("/recap", (req, res) => {
    res.render("components/recap");
})

app.get("/hello", (req, res) => {
    res.render("components/hello");
})

app.get("/example", (req, res) => {
    res.render("example");
})

app.get("/bookf", (req, res) => {
    res.render("invoice/bookedf");
})

app.get("/bookp", (req, res) => {
    res.render("invoice/bookedp");
})

app.get("/cancelp", (req, res) => {
    res.render("invoice/cancelp");
})

app.get("/cancelf", (req, res) => {
    res.render("invoice/cancelf");
})

// Listening our app on port 3000
app.listen(3000);