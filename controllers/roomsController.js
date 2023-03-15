const roomsMockData = require('../public/roomsMockData.json');

exports.rooms_list = async (req, res, next) => {
    try {
        const roomsApi = roomsMockData.map(e => {
            return {
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

exports.room_post = (req, res, next) => {
    res.send('Room added succesfully!')
}

exports.room_delete = (req, res, next) => {
    res.send(`Room N°${req.params.id} deleted succesfully`)
}