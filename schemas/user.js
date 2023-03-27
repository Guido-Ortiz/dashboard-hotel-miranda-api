const mongoose = require('mongoose');

// const { Schema } = mongoose;

const user = new mongoose.Schema({
    username: { type: String, required: true },
    photo: { type: String },
    email: { type: String, required: true },
    start: { type: String },
    description: { type: String, required: true },
    phone: { type: String, required: true },
    userstatus: { type: String, required: true },
    password: { type: String, required: true }
})

const User = mongoose.model('user', user)

module.exports = User
