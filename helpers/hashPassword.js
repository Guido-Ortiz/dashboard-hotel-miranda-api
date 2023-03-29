const bcrypt = require('bcrypt')

const hashPassword = async(password) => {
    return await bcrypt.hash(password, 10).then(r => r)
}

module.exports = hashPassword