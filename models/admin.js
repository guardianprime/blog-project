const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const adminModel = new mongoose.Schema({
  username: String,
  password: String,
});

//automatically  handles hasjing and salting of passwords
//and adds the foloowing properties to the user model:
//-- password
//-- salt
//--hash
adminModel.plugin(passportLocalMongoose);

module.exports = mongoose.model("Admin", adminModel);
