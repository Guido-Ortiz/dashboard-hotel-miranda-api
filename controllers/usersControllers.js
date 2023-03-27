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

exports.user_detail = (req, res) => {
    const { id } = req.params
    try {
        let detail = usersMockData.filter(e => e.id == id)
        res.json(detail);
    } catch (e) {
        console.log(e)
    }
};

exports.user_post = (req, res, next) => {
    res.json('User added succesfully!')
}

exports.user_delete = (req, res, next) => {
    res.json(`User ${req.params.id} deleted succesfully`)
}