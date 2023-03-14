const contactsMockData = require('../public/contactsMockData.json')

exports.contacts_list = async (req, res, next) => {
    try {
        const contactsApi = contactsMockData.map(e => {
            return {
                id: e.id,
                date: e.date,
                customer: e.customer,
                email: e.email,
                telephone: e.telephone,
                comment: e.comment,
                archived: e.archived
            }
        })
        res.json({ succes: true, contacts: contactsApi })

    } catch (e) {
        console.log(e)
    }
}

exports.contact_detail = (req, res) => {
    res.send(`CONTACT detail: ${req.params.id}`);
};

exports.contact_post = (req, res, next) => {
    res.send('Contact added succesfully!')
}

exports.contact_delete = (req, res, next) => {
    res.send(`Contact ${req.params.id} deleted succesfully`)
}