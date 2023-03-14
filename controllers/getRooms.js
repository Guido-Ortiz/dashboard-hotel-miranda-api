const axios = require("axios");

module.exports = {
    getRooms: async function(req, res, next){
        try {
            const response = await axios.get('http://localhost:3000/roomsMockData.json')
            const roomsApi = response.data.map(e => {
                return{
                        id: e.id,
                        number: e.number,
                        photo: e.photos,
                        type: e.type,
                        amenities: e.amenities.map(e => e),
                        price: e.price,
                        offer: e.offer,
                        status: e.status
                }
            })
            res.json({ succes: true, rooms: roomsApi })

        } catch (e) {
            console.log(e)
        }
    }
}