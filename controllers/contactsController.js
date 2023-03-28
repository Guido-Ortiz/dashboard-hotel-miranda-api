const { connect, disconnect } = require('../db/connection');
const Review = require('../schemas/review');


exports.contacts_list = async (req, res, next) => {
    await connect()
    const review = await Review.find().exec()
    try {
        res.json({ reviews: review })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.contact_detail = async (req, res) => {
    await connect()
    const { id } = req.params
    try {
        let review = await Review.findById(id).exec()
        res.json({ review: review });
    } catch (e) {
        console.log(e)
    }
    await disconnect()
};

exports.contact_post = async (req, res, next) => {
    await connect()
    const { name, email, phone, date, comment, archived } = req.body
    const newReview = { name, email, phone, date, comment, archived }
    try {
        await Review.create(newReview)
        res.json({ success: true, newReview: newReview })
    } catch (e) {
        console.log(e)
    }
}

exports.contact_delete = async (req, res, next) => {
    await connect()
    const { id } = req.params
    try {
        let review = await Review.findByIdAndDelete(id)
        res.json({ success: true, deleted: review })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}

exports.contact_edit = async (req, res, next) => {
    await connect()
    const { id } = req.params
    const { name, email, phone, date, comment, archived } = req.body
    const editReview = { name, email, phone, date, comment, archived }
    try {
        await Review.findByIdAndUpdate(id, editReview)
        res.json({ success: true, editReview: editReview })
    } catch (e) {
        console.log(e)
    }
    await disconnect()
}