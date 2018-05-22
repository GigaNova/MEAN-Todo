/**
 * Created by Styn on 22-5-2018.
 */
//Dependency loading
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./configs/database');

//MongoDB connection
mongoose.connect(config.database);
//Success
mongoose.connection.on('connected', () => {
    console.log("Succesfully connected to MongoDB database: " + config.database)
});
//Failure
mongoose.connection.on('Error', (err) => {
    console.log("Error connecting to MongoDB: " + err)
});

//Express setup
const app = express();

const users = require("./routes/users");

//Port
const port = 3000;

//Cors Middleware
app.use(cors());

//Static folder
app.use(express.static(path.join(__dirname, "client")));

//Bodyparser JSON Middleware
app.use(bodyParser.json());

//Routes
app.use('/users', users);

//Route: Index
app.get('/', (req, resp) => {
    res.send('Invalid Endpoint');
});

//Server start
app.listen(port, () => {
    console.log('Server started on port: ' + port)
});