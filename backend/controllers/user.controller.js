const userModel = require("../models/user.model");

const createAccount = async (req, res) => {
  const { email, fname, lname, password, address, city, state, zipcode } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send({
        status: false,
        message: "Email already exist! Kindly login to your account."
      });
    }
    let role = "user";
    const adminEmail = process.env.ADMIN_EMAIL;
    if(adminEmail.includes(email)) {
      role = "admin";
    }
    const newUser = new userModel({ email, fname, lname, password, address, city, state, zipcode, roles: role });
    await newUser.save();
    res.send({
      status: true,
      message: "Registeration Successful"
    });
  } catch (err) {
    res.send({
      status: false,
      message: "An error occured! pls try again"
    });
  }
};

const login = () => {};

module.exports = { createAccount, login };
