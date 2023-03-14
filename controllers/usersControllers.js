const axios = require('axios');

exports.users_list = async (req, res, next) => {
    try {
        const response = await axios.get('http://localhost:3000/usersMockData.json')
        const usersApi = response.data.map(e => {
            return {
                id: e.id,
                name: e.name,
                photo: e.photo,
                email: e.email,
                start: e.start,
                description: e.description,
                contact: e.contact,
                status: e.status
            }
        })
        res.json({ succes: true, users: usersApi })

    } catch (e) {
        console.log(e)
    }
}

exports.user_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: USER detail: ${req.params.id}`);
};