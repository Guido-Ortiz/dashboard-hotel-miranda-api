const contactsMockData = require('../public/contactsMockData.json')

exports.contacts_list = async (req, res, next) => {
    try {
        res.json({ succes: true, contacts: contactsMockData })
    } catch (e) {
        console.log(e)
    }
}

exports.contact_detail = (req, res) => {
    const { id } = req.params
    try {
        let detail = contactsMockData.filter(e => e.id == id)
        res.json(detail);
    } catch (e) {
        console.log(e)
    }
};

exports.contact_post = (req, res, next) => {
    res.send('Contact added succesfully!')
}

exports.contact_delete = (req, res, next) => {
    res.send(`Contact ${req.params.id} deleted succesfully`)
}