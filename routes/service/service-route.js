const router = require("express").Router();
const services = require("./service-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, (req, res)=> {
    services.find()
    .then(services =>{
        res.json({services});
    })
    .catch(err => res.send(err));
})

module.exports = router;