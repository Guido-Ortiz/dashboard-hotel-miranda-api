const mongoose = require('mongoose');

const room = new mongoose.Schema({
    number: { type: String, required: true },
    photos: { type: Array },
    price: { type: Number },
    offer: { type: String, default: 'No' },
    discount: { type: Number },
    type: { type: String },
    status: { type: String },
    amenities: { type: Array }
})

const Room = mongoose.model('room', room)

module.exports = Room