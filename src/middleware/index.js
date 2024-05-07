// Express
const express = require('express');

// CORS
const cors = require('cors');

const middleware = ( app ) => {
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
};

module.exports = middleware;