"use strict";

const express = require("express");
const router = express.Router();

router.get('/login', (req, res) => {
    res.render("home/index");
});

router.get('/calendar', (req, res) => {
    res.render("home/calendar");
});

router.get('/join', (req, res) => {
    res.render("home/join");
});

module.exports = router;