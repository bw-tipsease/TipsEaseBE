const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require("../routes/auth/auth-route");
const servicesRouter = require('../routes/service/service-route');
const usersRouter = require("../routes/users/user-routes");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors())

server.use("/api/auth", authRouter)
server.use("/api/services", servicesRouter);
server.use("/api/users", usersRouter);

server.get('/', (req,res) =>{
    res.send("Hello server up and running");
});

module.exports = server;