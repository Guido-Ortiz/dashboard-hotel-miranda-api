const usersMockData = require('../public/usersMockData.json');

exports.users_list = async (req, res, next) => {
    try {
        const usersApi = usersMockData.map(e => {
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

exports.user_post = (req, res, next) => {
    res.send('User added succesfully!')
}

exports.user_delete = (req, res, next) => {
    res.send(`User ${req.params.id} deleted succesfully`)
}