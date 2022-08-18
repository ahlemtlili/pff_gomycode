const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
{
    Name:
        {
            type:String,
            required:true
        },
    email: 
        {
            type: String,
            required: true,
        },
    objetMsg : {
        type: String,
        required: true,
        trim: true
    },
})

module.exports = mongoose.model('contact',contactSchema)