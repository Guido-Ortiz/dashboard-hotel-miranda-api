const { connect, disconnect } = require('../db/connection');
const Room = require('../schemas/room');

exports.rooms_list = async (req, res, next) => {
    await connect()
    const rooms = await Room.find().exec()
    try {
        res.json({ rooms: rooms })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.room_detail = async (req, res) => {
    await connect()
    const { id } = req.params
    try {
        let room = await Room.findById(id).exec()
        res.json({ room: room });
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.room_post = async (req, res, next) => {
    await connect()
    const { number, photos, price, offer, type, status, amenities } = req.body
    const newRoom = { number, photos, price, offer, type, status, amenities }
    try {
        await Room.create(newRoom)
        res.json({ success: true, newRoom: newRoom })
    } catch (e) {
        console.log(e)
    }
}

exports.room_delete = async (req, res, next) => {
    await connect()
    const { id } = req.params
    try {
        let room = await Room.findByIdAndDelete(id)
        res.json({ success: true, deleted: room })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.room_edit = async (req, res, next) => {
    await connect()
    const { id } = req.params
    const { number, photos, price, offer, type, status, amenities } = req.body
    const editRoom = { number, photos, price, offer, type, status, amenities }
    try {
        await Room.findByIdAndUpdate(id, editRoom)
        res.json({ success: true, editRoom: editRoom })
    } catch (e) {
        console.log(e)
    }
}