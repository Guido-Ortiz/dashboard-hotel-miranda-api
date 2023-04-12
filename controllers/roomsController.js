const { connect, disconnect } = require('../db/connection')
const Room = require('../schemas/room')

exports.rooms_list = async (req, res, next) => {
    try {
        await connect()
        const rooms = await Room.find().exec()
        await disconnect()
        res.json({ data: rooms })
    } catch (e) {
        console.log(e)
    }
}

exports.room_detail = async (req, res) => {
    const { id } = req.params
    try {
        await connect()
        let room = await Room.findById(id).exec()
        await disconnect()
        res.json({ data: room })
    } catch (e) {
        console.log(e)
    }
}

exports.room_post = async (req, res, next) => {
    const { number, photos, price, offer, discount, type, status, amenities, cancelation_policy } = req.body
    const newRoom = { number, photos, price, offer, discount, type, status, amenities, cancelation_policy }
    try {
        await connect()
        await Room.create(newRoom)
        await disconnect()
        res.json({ success: true, data: newRoom })
    } catch (e) {
        console.log(e)
    }
}

exports.room_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await connect()
        let room = await Room.findByIdAndDelete(id)
        await disconnect()
        res.json({ success: true, data: room })
    } catch (e) {
        console.log(e)
    }
}

exports.room_edit = async (req, res, next) => {
    const { id } = req.params
    const { number, photos, price, offer, discount, type, status, amenities, cancelation_policy } = req.body
    const editRoom = { number, photos, price, offer, discount, type, status, amenities, cancelation_policy }
    try {
        await connect()
        await Room.findByIdAndUpdate(id, editRoom)
        await disconnect()
        res.json({ success: true, data: editRoom })
    } catch (e) {
        console.log(e)
    }
}