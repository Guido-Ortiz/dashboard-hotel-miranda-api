// const bookingsMockData = require('../public/bookingsMockData.json');
const connection = require('../database');
const dbQuery = require('../helpers/dbQuery');

// function dbQuery(query, params) {
//     return new Promise((resolve, reject) => {
//         connection.query(query, params, (error, results) => {
//             if (error)
//                 reject(error);
//             resolve(results);
//         });
//     });
// }

exports.bookings_list = async (req, res, next) => {
    try {
        const bookings = await dbQuery('SELECT b.booking_id, c.name, b.order, b.checkin, b.checkout, b.request, b.number, b.photo, r.type, s.status FROM miranda.bookings AS b INNER JOIN customers AS c ON c.id_customer=b.id_customer INNER JOIN room_type AS r ON r.id=b.id_room_type INNER JOIN booking_status AS s ON s.id_booking_status=b.id_status;', null)
    
        res.json(bookings)

    } catch (e) {
        console.log(e)
    }
}

exports.booking_detail = async (req, res) => {
    const { id } = req.params
    try {

        const booking = await dbQuery('SELECT b.booking_id, c.name, b.order, b.checkin, b.checkout, b.request, b.number, b.photo, r.type, s.status FROM miranda.bookings AS b INNER JOIN customers AS c ON c.id_customer=b.id_customer INNER JOIN room_type AS r ON r.id=b.id_room_type INNER JOIN booking_status AS s ON s.id_booking_status=b.id_status WHERE b.booking_id=?', id)

        res.json(booking)

    } catch (e) {
        console.log(e)
    }
};

exports.booking_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        const booking_to_delete = await dbQuery('DELETE FROM miranda.bookings AS b WHERE b.booking_id=?', id)
        res.json({ success: true, deleted: booking_to_delete })
    } catch(e) {
        console.log(e)
        next(e)
    }
    // res.json(`Booking ${req.params.id} deleted succesfully`)
}

exports.booking_post = (req, res, next) => {
    res.json('Booking added succesfully!')
}

exports.booking_edit = (req, res, next) => {
    const edit = bookingsMockData.filter(e => e.id == req.params.id)
    res.json(edit)
}