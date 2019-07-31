const express = require("express")
const Services = require("./service-model");
const restricted = require("../auth/restricted-middleware");

const router = express.Router();

router.get("/", restricted, (req, res)=> {
    Services.find()
    .then(services =>{
        res.json({services});
    })
    .catch(err => res.send(err));
})
router.post("/", restricted, async (req, res)=> {
  try {
    const newService = await Services.add(req.body);
    res.json({message: newService})
  }catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
})
module.exports = router;