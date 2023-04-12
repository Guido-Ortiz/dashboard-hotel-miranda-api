const { connect, disconnect } = require('../db/connection');
const User = require("../schemas/user");

exports.users_list = async (req, res, next) => {
    try {
        await connect()
        const users = await User.find().exec()
        res.status(200).json({ data: users })
        await disconnect()
    } catch (e) {
        next(e)
    }
}

exports.user_detail = async (req, res) => {
    const { id } = req.params
    try {
        await connect()
        let user = await User.findById(id).exec()
        res.json({ data: user })
        await disconnect()
    } catch (e) {
        next(e)
    }
}

exports.user_post = async (req, res, next) => {
    const { username, photo, email, start, description, phone, userstatus, password } = req.body
    const newUser = {
        username,
        photo,
        email,
        start,
        description,
        phone,
        password,
        userstatus
    }
    try {
        await connect()
        await User.create(newUser)
        res.json({ success: true, data: newUser })
        await disconnect()
    } catch(e) {
        next(e)
    }
}

exports.user_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await connect()
        let user = await User.findByIdAndDelete({ _id: id })
        res.json({ success: true, data: user })
        await disconnect()
    } catch (e) {
        next(e)
    }
}

exports.user_edit = async (req, res, next) => {
    const { id } = req.params
    const { username, photo, email, start, description, phone, userstatus, password } = req.body
    const editUser = {
        username,
        photo,
        email,
        start,
        description,
        phone,
        password,
        userstatus
    }
    try {
        await connect()
        await User.findByIdAndUpdate(id, editUser)
        res.json({ success: true, data: editUser })
        await disconnect()
    } catch(e) {
        next(e)
    }
}