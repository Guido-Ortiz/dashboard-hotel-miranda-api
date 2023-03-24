const dbQuery = require('../helpers/dbQuery')

exports.contacts_list = async (req, res, next) => {
    try {
        const contacts = await dbQuery('SELECT c.id_contacts, cu.name, cu.email, cu.telephone, c.comment, c.archived FROM miranda.contacts AS c INNER JOIN customers AS cu ON c.idCustomer=cu.id_customer;', null)
        res.json({ contacts })
    } catch (e) {
        console.log(e)
    }
}

exports.contact_detail = async (req, res) => {
    const { id } = req.params
    try {
        let detail = await dbQuery('SELECT c.id_contacts, cu.name, cu.email, cu.telephone, c.comment, c.archived FROM miranda.contacts AS c INNER JOIN customers AS cu ON c.idCustomer=cu.id_customer WHERE c.id_contacts=?', id)
        res.json({ detail });
    } catch (e) {
        console.log(e)
    }
};

exports.contact_delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await dbQuery('DELETE FROM miranda.contacts AS c WHERE c.id_contacts=?', id)
        res.json({ succes: true })
    } catch(e) {
        console.log(e)
        next(e)
    }
}

exports.contact_post = async (req, res, next) => {
    const { id_contacts, idCustomer, comment, archived } = req.body
    const newComment = { id_contacts, idCustomer, comment, archived }
    try {
        await dbQuery('INSERT INTO miranda.contacts SET ?', newComment)
        res.json({ success: true, comment: newComment })
    } catch(e) {
        console.log(e)
        next(e)
    }
}

exports.contact_edit = async (req, res, next) => {
    const { id } = req.params
    const { id_contacts, idCustomer, comment, archived } = req.body
    const editComment = { id_contacts, idCustomer, comment, archived }
    try {
        await dbQuery('UPDATE miranda.contacts AS c SET ? WHERE c.id_contacts=?', [ editComment, id ])
        res.json({ succes: true, edit: editComment })
    } catch(e) {
        console.log(e)
        next(e)
    }
}