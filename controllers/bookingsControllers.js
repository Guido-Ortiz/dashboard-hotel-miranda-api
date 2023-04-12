const { connect, disconnect } = require('../db/connection')
const Booking = require('../schemas/booking')

exports.bookings_list = async (req, res, next) => {
    try {
        await connect()
        const bookings = await Booking.find().exec()
        res.json({ data: bookings })
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
        res.json({ data: booking })
        await disconnect()
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
        res.json({ success: true, data: newBooking })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}

exports.booking_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await connect()
        let booking = await Booking.findByIdAndDelete(id)
        res.json({ success: true, data: booking })
        await disconnect()
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
        res.json({ success: true, data: editBooking })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}