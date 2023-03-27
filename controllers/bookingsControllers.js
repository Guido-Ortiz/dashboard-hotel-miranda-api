const bookingsMockData = require('../public/bookingsMockData.json')
const User = require('../schemas/user')

exports.bookings_list = async (req, res, next) => {
    // const users = await User.find()
    try {
        res.json({ succes: true, bookings: bookingsMockData })
    } catch (e) {
        console.log(e)
    }
}

exports.booking_detail = (req, res) => {
    const { id } = req.params
    try {
        let detail = bookingsMockData.filter(e => e.id == id)
        res.json(detail);
    } catch (e) {
        console.log(e)
    }
};

exports.booking_post = (req, res, next) => {
    res.json('Booking added succesfully!')
}

exports.booking_delete = (req, res, next) => {
    res.json(`Booking ${req.params.id} deleted succesfully`)
}

exports.booking_edit = (req, res, next) => {
    const edit = bookingsMockData.filter(e => e.id == req.params.id)
    res.json(edit)
}