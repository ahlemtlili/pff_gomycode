const express = require("express");
const Parent = require("../models/parent");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const { registerRules,loginRules, validator } = require("../middlewares/validator");
const router = express.Router();
//register parent:
router.post("/registerParent", registerRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    const existParent = await Parent.findOne({ email });
    if (existParent) {
      return res.status(400).send({ msg: "parent already exist, please login" });
    }
    const newParent = new Parent({ ...req.body });
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    newParent.password = hashedPassword;
    await newParent.save();
    res.send({ msg: "parent successfully registred", newParent });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

//login parent
router.post("/loginParent",loginRules(),validator, async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedParent = await Parent.findOne({ email });
    if (!existedParent) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const isMatched = await bcrypt.compare(password, existedParent.password);
    if (!isMatched) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const payload = { idParent: existedParent._id };
    const token = await jwt.sign(payload, process.env.secretOrPublicKey);
    res.send({ user: existedParent, token });
  } catch (error) {
    console.log(error);
  }
});
// current parent
router.get("/currentParent", isAuth(), (req, res) => {
  console.log(req.user);
  res.send(req.user);
});


module.exports = router;
