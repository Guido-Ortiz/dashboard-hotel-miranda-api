const mongoose = require('mongoose')
require('dotenv').config();

const { MONGO } = process.env

async function connect() {
    try {
        await mongoose.connect(MONGO);
        console.log('Conected to DB')
    } catch (error) {
        throw new Error(error);
    }
}

async function disconnect() {
    await mongoose.disconnect();
}

module.exports = { connect, disconnect }