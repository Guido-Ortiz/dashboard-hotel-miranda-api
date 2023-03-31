const { connect, disconnect } = require('../db/connection')
const Booking = require('../schemas/booking')

exports.bookings_list = async (req, res, next) => {
    const { name } = req.query
    await connect()
    if(!name) {
        try {
            const bookings = await Booking.find().exec()
            res.json({ data: bookings })
        } catch (e) {
            console.log(e)
        }
    } else {
        try {
            const bookings = await Booking.find({ customer_name: name }).exec()
            res.json({ data: bookings })
        } catch(e) {
            console.log(e)
        }
    }
    
    await disconnect()
}

exports.booking_detail = async (req, res) => {
    await connect()
    const { id } = req.params
    try {
        let booking = await Booking.findById(id).exec()
        res.json({ data: booking })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.booking_post = async (req, res, next) => {
    await connect()
    const { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone } = req.body
    const newBooking = { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone }
    try {
        await Booking.create(newBooking)
        res.json({ success: true, data: newBooking })
    } catch(e) {
        console.log(e)
    }
    await disconnect()
}

exports.booking_delete = async (req, res, next) => {
    await connect()
    const { id } = req.params
    try {
        let booking = await Booking.findByIdAndDelete(id)
        res.json({ success: true, data: booking })
    } catch(e) {
        console.log(e)
    }
    await disconnect()
}

exports.booking_edit = async (req, res, next) => {
    await connect()
    const { id } = req.params
    const { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone } = req.body
    const editBooking = { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone }
    try {
        await Booking.findByIdAndUpdate(id, editBooking)
        res.json({ success: true, data: editBooking })
    } catch(e) {
        console.log(e)
    }
    await disconnect()
}