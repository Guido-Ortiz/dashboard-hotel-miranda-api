const usersMockData = require('../public/usersMockData.json');

exports.users_list = async (req, res, next) => {
    try {
        res.json({ succes: true, users: usersMockData })
    } catch (e) {
        console.log(e)
    }
}

exports.user_detail = (req, res) => {
    const { id } = req.params
    try {
        let detail = usersMockData.filter(e => e.id == id)
        //console.log(detail)
        res.json(detail);
    } catch(e) {
        console.log(e)
    }
};

exports.user_post = (req, res, next) => {
    res.send('User added succesfully!')
}

exports.user_delete = (req, res, next) => {
    res.send(`User ${req.params.id} deleted succesfully`)
}