const axios = require("axios");

module.exports = {
    getContacts: async function(req, res, next){
        try {
            const response = await axios.get('http://localhost:3000/contactsMockData.json')
            const contactsApi = response.data.map(e => {
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
}