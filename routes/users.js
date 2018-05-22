/**
 * Created by Styn on 22-5-2018.
 */
const express = require("express");
const router = express.Router();

//Register user
router.get("/register", (req, res, next) => {
    res.send("User registration");
});

//Login user
router.get("/login", (req, res, next) => {
    res.send("User login");
});

//Authenticate user
router.get("/auth", (req, res, next) => {
    res.send("User auth");
});

//Validate user
router.get("/validate", (req, res, next) => {
    res.send("User validation");
});

module.exports = router;