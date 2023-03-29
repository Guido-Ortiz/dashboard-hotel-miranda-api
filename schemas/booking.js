const mongoose = require("mongoose")

const booking = new mongoose.Schema({
    order: { type: String },
    checkin: { type: String },
    checkout: { type: String },
    request: { type: String },
    room_type: { type: String },
    number: { type: Number },
    photo: { type: String },
    status: { type: String },
    customer_name: { type: String },
    customer_email: { type: String },
    customer_phone: { type: String }
})

const Booking = mongoose.model('booking', booking)

module.exports = Booking