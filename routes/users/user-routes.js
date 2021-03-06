const router = require("express").Router();
const restricted = require("../auth/restricted-middleware");
const Users = require("./user-model");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, decodedToken: req.decodedToken });
    })
    .catch(err => res.send(err));
});

module.exports = router;