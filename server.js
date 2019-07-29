const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();


server.get('/', (req,res) =>{
    res.send("Hello server up and running");
});

module.exports = server;