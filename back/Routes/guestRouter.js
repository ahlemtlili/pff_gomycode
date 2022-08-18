const express = require('express');
const guestRouter = express.Router()
const contacts = require("../models/ContactUs");

guestRouter.post('/contact',async (req,res)=>{
    try {
        const newMsg = new contacts(req.body);
        await newMsg.save();
        res.status(200).send({msg:"Message sent successfully",newMsg})
    } catch (error) {
        res.status(500).send({msg :'could not send the message'})
    }
})

module.exports = guestRouter;