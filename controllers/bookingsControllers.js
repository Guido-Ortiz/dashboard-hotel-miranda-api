const { connect, disconnect } = require('../db/connection')
const Booking = require('../schemas/booking')

exports.bookings_list = async (req, res, next) => {
    const { name } = req.query
    
    try {
        await connect()
        if (!name) {
            const bookings = await Booking.find().exec()
            res.json({ data: bookings })
        } else {
            const bookings = await Booking.find({ customer_name: name }).exec()
            res.json({ data: bookings })
        }
        await disconnect()
    } catch (e) {
        console.log(e)
    }

}

exports.booking_detail = async (req, res) => {
    const { id } = req.params
    try {
        await connect()
        let booking = await Booking.findById(id).exec()
        await disconnect()
        res.json({ data: booking })
    } catch (e) {
        console.log(e)
    }
}

exports.booking_post = async (req, res, next) => {
    const { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone } = req.body
    const newBooking = { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone }
    try {
        await connect()
        await Booking.create(newBooking)
        await disconnect()
        res.json({ success: true, data: newBooking })
    } catch (e) {
        console.log(e)
    }
}

exports.booking_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await connect()
        let booking = await Booking.findByIdAndDelete(id)
        await disconnect()
        res.json({ success: true, data: booking })
    } catch (e) {
        console.log(e)
    }
}

exports.booking_edit = async (req, res, next) => {
    const { id } = req.params
    const { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone } = req.body
    const editBooking = { order, checkin, checkout, request, room_type, number, photo, status, customer_name, customer_email, customer_phone }
    try {
        await connect()
        await Booking.findByIdAndUpdate(id, editBooking)
        await disconnect()
        res.json({ success: true, data: editBooking })
    } catch (e) {
        console.log(e)
    }
}