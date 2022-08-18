const mongoose = require("mongoose");
const parentSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "firstName is required"] },
  lastName: { type: String, required: [true, "lastName is required"] },
  CIN: Number,
  numTel:Number,
  email:{
    type: String,
    required: [true, "email is required"],
    lowercase: true,
  },
  password: String,
  user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});
module.exports = Parent = mongoose.model("parent", parentSchema);
