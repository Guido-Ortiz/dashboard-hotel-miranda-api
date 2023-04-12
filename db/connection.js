const mongoose = require('mongoose')
require('dotenv').config()

const { MONGO } = process.env

async function connect() {
    try {
        await mongoose.connect(MONGO)
        console.log('Connected to DB')
    } catch (error) {
        throw new Error(error)
    }
}

async function disconnect() {
    await mongoose.disconnect()
    console.log('Disconnected from DB')
}

module.exports = { connect, disconnect }