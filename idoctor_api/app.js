const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

// Controllers

mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open', function() {
    console.log('Connected to MongoDB');
});

db.on('error', function(err) {
    console.log(err);
});

const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, function() {
    console.log("Server started on port 3000....");
});