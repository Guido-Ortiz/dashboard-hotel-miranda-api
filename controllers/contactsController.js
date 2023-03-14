const contactsMockData = require('../public/contactsMockData.json')

exports.contacts_list = async (req, res, next) => {
    try {
        const contactsApi = contactsMockData.map(e => {
            return{
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

exports.contacts_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: CONTACT detail: ${req.params.id}`);
  };