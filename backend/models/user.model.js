const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  roles: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

let userModel = mongoose.model("users", userSchema, "users");

module.exports = userModel;