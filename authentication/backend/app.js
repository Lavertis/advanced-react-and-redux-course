const express = require('express');
const logger = require('morgan');

// App Setup
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Server Setup
const port = process.env.PORT || '3090';
app.listen(port, () =>
    console.log(`Server running on port ${port}`),
);

module.exports = app;