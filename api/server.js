const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const servicesRouter = require('../routes/service/service-route');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors())

server.use("/api/services", servicesRouter);

server.get('/api', (req,res) =>{
    res.send("Hello server up and running");
});

module.exports = server;