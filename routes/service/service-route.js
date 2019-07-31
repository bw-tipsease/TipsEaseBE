const express = require("express")
const Services = require("./service-model");
const restricted = require("../auth/restricted-middleware");

const router = express.Router();

// get list of services
router.get("/", restricted, (req, res)=> {
    Services.find()
    .then(services =>{
        res.json({services});
    })
    .catch(err => res.send(err));
})
// add a new service
router.post("/", restricted, async (req, res)=> {
  try {
    const newService = await Services.add(req.body);
    res.json({message: newService})
  }catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
})
//get service by name
router.get("/:service_type", checkId, async (req, res) => {
    const specifiedService = await Services.findByName(req.params.service_type);
    res.json({ message: specifiedService });
  });
module.exports = router;

async function checkId(req, res, next) {
    if (!req.params.service_type) {
      res.status(400).json({ message: "no service service_type" });
    } else {
      const chosenName = await Services.findByName(req.params.service_type);
      if (!chosenName) {
        res.status(404).json({ message: "wrong service service_type" });
      }
    }
    next();
  }