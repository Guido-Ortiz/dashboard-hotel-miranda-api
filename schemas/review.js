const mongoose = require('mongoose');

const review = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String },
    comment: { type: String, required: true },
    archived: { type: Boolean }
})

const Review = mongoose.model('review', review)

module.exports = Review