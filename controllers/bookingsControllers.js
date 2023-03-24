const dbQuery = require('../helpers/dbQuery');

exports.bookings_list = async (req, res, next) => {
    try {
        const bookings = await dbQuery('SELECT b.booking_id, c.name, b.order, b.checkin, b.checkout, b.request, b.number, b.photo, r.type, s.status FROM miranda.bookings AS b INNER JOIN customers AS c ON c.id_customer=b.id_customer INNER JOIN room_type AS r ON r.id=b.id_room_type INNER JOIN booking_status AS s ON s.id_booking_status=b.id_status;', null)
    
        res.json({ bookings })

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
}

exports.booking_post = async (req, res, next) => {
    const { id_customer, order, checkin, checkout, request, id_room_type, number, photo, id_status } = req.body
    const newBooking = {
        id_customer, order, checkin, checkout, request, id_room_type, number, photo, id_status
    }

    try {
        await dbQuery('INSERT INTO bookings SET ?', newBooking)
        res.json({ success: true, booking_added: newBooking })
    } catch(e) {
        console.log(e)
        next(e)
    }
}

exports.booking_edit = async (req, res, next) => {
    const { id } = req.params
    const { id_customer, order, checkin, checkout, request, id_room_type, number, photo, id_status } = req.body
    const editBooking = {
        id_customer,
        order, 
        checkin, 
        checkout, 
        request, 
        id_room_type, 
        number, 
        photo, 
        id_status
    }

    try {
        await dbQuery('UPDATE bookings AS b SET ? WHERE b.booking_id=?', [ editBooking, id ])
        res.json({ success: true, edit: editBooking })
    } catch(e) {
        console.log(e)
        next(e)
    }

}