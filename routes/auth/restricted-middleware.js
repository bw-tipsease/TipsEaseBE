const jwt = require("jsonwebtoken");
const secrets = require("../../api/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secrets.jwtSecret, (err) => {
    if (err) {
      res.status(403).json({ message: "no token available" });
    } else {
      next();
    }
  });
};