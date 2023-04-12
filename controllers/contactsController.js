const { connect, disconnect } = require('../db/connection');
const Review = require('../schemas/review');


exports.contacts_list = async (req, res, next) => {
    try {
        await connect()
        const review = await Review.find().exec()
        res.json({ data: review })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}

exports.contact_detail = async (req, res) => {
    const { id } = req.params
    try {
        await connect()
        let review = await Review.findById(id).exec()
        res.json({ data: review });
        await disconnect()
    } catch (e) {
        console.log(e)
    }
};

exports.contact_post = async (req, res, next) => {
    const { name, email, phone, date, issue, comment, stars, archived } = req.body
    const newReview = { name, email, phone, date, issue, comment, stars, archived }
    try {
        await connect()
        await Review.create(newReview)
        res.json({ success: true, data: newReview })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}

exports.contact_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await connect()
        let review = await Review.findByIdAndDelete(id)
        res.json({ success: true, data: review })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}

exports.contact_edit = async (req, res, next) => {
    const { id } = req.params
    const { name, email, phone, date, issue, comment, stars, archived } = req.body
    const editReview = { name, email, phone, date, issue, comment, stars, archived }
    try {
        await connect()
        await Review.findByIdAndUpdate(id, editReview)
        res.json({ success: true, data: editReview })
        await disconnect()
    } catch (e) {
        console.log(e)
    }
}