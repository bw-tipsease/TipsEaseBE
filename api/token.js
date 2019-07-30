const jwt = require("jsonwebtoken");
const secret = require('./secrets')

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const option = {
    expiresIn: "2h"
  };
  return jwt.sign(payload, secret.jwtSecret, option);
}

module.exports = generateToken;