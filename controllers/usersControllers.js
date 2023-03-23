const dbQuery = require('../helpers/dbQuery');
const usersMockData = require('../public/usersMockData.json');

exports.users_list = async (req, res, next) => {
    try {
        const users = await dbQuery('SELECT u.id_user, u.name, u.photo, u.email, u.start, u.description, u.contact, us.status FROM miranda.users AS u INNER JOIN user_status AS us ON u.idStatus=us.id_status;', null)

        res.json(users)

    } catch (e) {
        console.log(e)
    }
}

exports.user_detail = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await dbQuery('SELECT u.id_user, u.name, u.photo, u.email, u.start, u.description, u.contact, us.status FROM miranda.users AS u INNER JOIN user_status AS us ON u.idStatus=us.id_status WHERE u.id_user=?;', id)

        res.json(user)

    } catch (e) {
        console.log(e)
        next(e)
    }
};

exports.user_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        const user_to_delete = await dbQuery('SELECT *  FROM miranda.users AS u WHERE u.id_user=?', id)
        await dbQuery('DELETE FROM miranda.users AS u WHERE u.id_user=?', id)
        res.json({ success: true, deleted: user_to_delete })
    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.user_post = async (req, res, next) => {
    const { name, photo, email, start, description, contact, idStatus } = req.body
    const newUser = {
        name,
        photo,
        email,
        start,
        description,
        contact,
        idStatus
    }
    try {
        await dbQuery('INSERT INTO users SET ?', newUser)
        res.json({ success: true, user_added: newUser })
    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.user_edit = async (req, res, next) => {
    const { id } = req.params
    const { name, photo, email, start, description, contact, idStatus } = req.body
    const editUser = {
        name,
        photo,
        email,
        start,
        description,
        contact,
        idStatus
    }

    try {
        await dbQuery('UPDATE users AS u SET ? WHERE u.id_user=?', [ editUser, id ])
        res.json({ success: true, edit: editUser })
    } catch(e) {
        console.log(e)
        next(e)
    }
}
