const roomsMockData = require('../public/roomsMockData.json');

exports.rooms_list = async (req, res, next) => {
    try {
        res.json({ succes: true, rooms: roomsMockData })
    } catch (e) {
        console.log(e)
    }
}

exports.room_detail = (req, res) => {
    const { id } = req.params
    try {
        let detail = roomsMockData.filter(e => e.id == id)
        res.json(detail);
    } catch (e) {
        console.log(e)
    }
};

exports.room_post = (req, res, next) => {
    res.json('Room added succesfully!')
}

exports.room_delete = (req, res, next) => {
    res.json(`Room N°${req.params.id} deleted succesfully`)
}