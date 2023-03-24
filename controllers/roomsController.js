const dbQuery = require('../helpers/dbQuery');

exports.rooms_list = async (req, res, next) => {
    try {
        const rooms = await dbQuery('SELECT r.id_rooms, r.number, r.photos, r.price, r.offer, t.type, s.status FROM miranda.rooms AS r INNER JOIN room_type AS t ON r.idType=t.id INNER JOIN room_status AS s ON r.id_status=s.id_room_status ORDER BY id_rooms;', null)
        res.json(rooms)
    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.room_detail = async (req, res) => {
    const { id } = req.params
    try {
        const room = await dbQuery('SELECT r.id_rooms, r.number, r.photos, r.price, r.offer, t.type, s.status FROM miranda.rooms AS r INNER JOIN room_type AS t ON r.idType=t.id INNER JOIN room_status AS s ON r.id_status=s.id_room_status WHERE r.id_rooms=?;', id)
        const amenities = await dbQuery('SELECT a.idamenities, a.amenity FROM miranda.rooms_amenities AS ra INNER JOIN rooms AS r ON r.id_rooms=ra.id_room INNER JOIN amenities AS a ON a.idamenities=ra.id_amenity WHERE r.id_rooms=?;', id)

        res.json({ room, amenities });
    } catch (e) {
        console.log(e)
        next(e)
    }
};

exports.room_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        const room_to_delete = await dbQuery('SELECT * FROM miranda.rooms AS r WHERE r.id_rooms=?;', id)
        await dbQuery('DELETE FROM miranda.rooms AS r WHERE r.id_rooms=?', id)
        res.json({ success: true, deleted: room_to_delete })
    } catch(e) {
        console.log(e)
        next(e)
    }
}

exports.room_post = async (req, res, next) => {
    const { id_rooms, number, photos, price, offer, idType, id_status } = req.body
    const newRoom = {
        id_rooms,
        number,
        photos, 
        price, 
        offer, 
        idType, 
        id_status
    }
    try {
        await dbQuery('INSERT INTO rooms SET ?', newRoom)
        res.json({ success: true, room_added: newRoom })
    } catch(e) {
        console.log(e)
        next(e)
    }
}

exports.room_edit = async (req, res, next) => {
    const { id } = req.params
    const { id_rooms, number, photos, price, offer, idType, id_status } = req.body
    const editRoom = {
        id_rooms,
        number,
        photos, 
        price, 
        offer, 
        idType, 
        id_status
    }
    try {
        await dbQuery('UPDATE rooms AS r SET ? WHERE r.id_rooms=?', [ editRoom, id ])
        res.json({ success: true, edit: editRoom })
    } catch(e) {
        console.log(e)
        next(e)
    }
}
