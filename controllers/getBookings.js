const axios = require("axios");

module.exports = {
    getBookings: async function(req, res, next){
        try {
            const response = await axios.get('http://localhost:3000/bookingsMockData.json')
            const bookingsApi = response.data.map(e => {
                return{
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
}