const { connect, disconnect } = require('../db/connection')
const User = require("../schemas/user");

exports.users_list = async (req, res, next) => {
    await connect()
    const users = await User.find().exec()
    try {
        res.json({ users: users })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.user_detail = async (req, res) => {
    await connect()
    const { id } = req.params
    try {
        let user = await User.findById(id).exec()
        res.json({ user: user })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
};

exports.user_post = async (req, res, next) => {
    await connect()
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
        await User.create(newUser)
        res.json({ success: true, newUser: newUser })
    } catch(e) {
        console.log(e)
    }
    await disconnect()
}

exports.user_delete = async (req, res, next) => {
    await connect()
    const { id } = req.params
    try {
        let user = await User.findByIdAndDelete({ _id: id })
        res.json({ success: true, deleted: user })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.user_edit = async (req, res, next) => {
    await connect()
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
        await User.findByIdAndUpdate(id, editUser)
        res.json({ success: true, editUser: editUser })
    } catch(e) {
        console.log(e)
    }
    await disconnect()
}