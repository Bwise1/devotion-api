var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: "kindly provide username",
  },
  password: {
    type: String,
    required: "kindly provide password",
  },
  email: {
    type: email,
    required: "kindly provide email",
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
