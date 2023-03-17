exports.public_message = (req, res, next) => {
    res.json({
        name: 'Hotel Miranda',
        private_routes: [{name: '/bookings', methods: ['GET', 'POST', 'DELETE', 'PUT']}, '/rooms', '/contacts', '/users']
    })
}