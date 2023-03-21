const bookingsMockData = require('../public/bookingsMockData.json')
const connection = require('../database')

exports.bookings_list = async (req, res, next) => {
    try {
        // res.json({ succes: true, bookings: bookingsMockData })
        connection.query('SELECT * FROM bookings', function (error, results, fields) {
            if (error) throw error;
            // console.log('The solution is: ', results)
            res.json({ succes: true, bookings: results })
          })
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