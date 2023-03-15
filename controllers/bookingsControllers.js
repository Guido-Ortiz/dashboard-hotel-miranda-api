const bookingsMockData = require('../public/bookingsMockData.json')

exports.bookings_list = async (req, res, next) => {
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
        //console.log(detail)
        res.json(detail);
    } catch(e) {
        console.log(e)
    }
};

exports.booking_post = (req, res, next) => {
    res.send('Booking added succesfully!')
}

exports.booking_delete = (req, res, next) => {
    res.send(`Booking ${req.params.id} deleted succesfully`)
}