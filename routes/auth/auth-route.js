const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Workers = require("./auth-model");
const generateToken = require('../../api/token')

router.post("/register", (req, res) => {
  let worker = req.body;
  const hash = bcrypt.hashSync(worker.password, 10);
  worker.password = hash;

  Workers.add(worker)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { worker_name, password } = req.body;

  Workers.findBy({ worker_name })
    .first()
    .then(worker => {
      const token = generateToken(worker);
      if (worker && bcrypt.compareSync(password, worker.password)) {
        res.status(200).json({
          mess: `welcome ${worker.worker_name}`,
          token,
        });
      } else {
        res.status(401).json({ mess: "invalid credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;