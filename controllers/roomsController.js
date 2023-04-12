const { connect, disconnect } = require('../db/connection')
const Room = require('../schemas/room')

exports.rooms_list = async (req, res, next) => {
    try {
        await connect()
        const rooms = await Room.find().exec()
        res.json({ data: rooms })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}

exports.room_detail = async (req, res) => {
    const { id } = req.params
    try {
        await connect()
        let room = await Room.findById(id).exec()
        res.json({ data: room })
        await disconnect()
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
        res.json({ success: true, data: newRoom })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}

exports.room_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await connect()
        let room = await Room.findByIdAndDelete(id)
        res.json({ success: true, data: room })
        await disconnect()
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
        res.json({ success: true, data: editRoom })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}