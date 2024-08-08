const userModel = require("../models/user.model");

const createAccount = (req, res) => {
  let user = userModel(req.body);
  user.save()
    .then(() => {
      res.send({
        status: true,
        message: "Registeration Successful",
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        message: "An error occured! pls try again",
      });
    });
};

const login = () => {
 
};

module.exports = { createAccount, login };
