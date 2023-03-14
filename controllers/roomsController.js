const axios = require('axios');

exports.rooms_list = async (req, res, next) => {
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

exports.room_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: room detail: ${req.params.id}`);
  };