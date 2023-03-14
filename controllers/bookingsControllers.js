const bookingsMockData = require('../public/bookingsMockData.json')

exports.bookings_list = async (req, res, next) => {
    try {
        const bookingsApi = bookingsMockData.map(e => {
            return {
                id: e.id,
                client: e.client,
                order: e.order,
                checkin: e.checkin,
                checkout: e.checkout,
                request: e.request,
                type: e.type,
                number: e.number,
                photo: e.photo,
                status: e.status
            }
        })
        res.json({ succes: true, bookings: bookingsApi })
    } catch (e) {
        console.log(e)
    }
}

exports.booking_detail = (req, res) => {
    const { id } = req.params
    try {
        const detail = bookingsMockData.filter(e => e.id === id)
        console.log(detail)
    } catch(e) {
        console.log(e)
    }
    res.send(`Booking detail: ${req.params.id}`);
};

exports.booking_post = (req, res, next) => {
    res.send('Booking added succesfully!')
}

exports.booking_delete = (req, res, next) => {
    res.send(`Booking ${req.params.id} deleted succesfully`)
}