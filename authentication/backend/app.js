const express = require('express');
const logger = require('morgan');
const router = require('./router');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/auth');

// App Setup
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
router(app)

// Server Setup
const port = process.env.PORT || '3090';
app.listen(port, () =>
    console.log(`Server running on port ${port}`),
);

module.exports = app;