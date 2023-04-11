const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username: { type: String },
    photo: { type: String },
    email: { type: String },
    phone: { type: String },
    start: { type: String },
    description: { type: String },
    userstatus: { type: String },
    password: { type: String }
})

const User = mongoose.model('user', user)

module.exports = User
