const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.login_post = async (req, res, next) => {
    passport.authenticate('login', async (err, admin, info) => {
        try {
            if (err || !admin) {
                return res.json('Wrong credentials')
            }

            req.login(admin, { session: false }, async (error) => {
                if (error) return next(error);

                const body = { _id: admin._id, email: admin.email };
                const token = jwt.sign({ user: body }, process.env.SECRET_KEY);

                return res.json({ token, admin });
            }
            );
        } catch (e) {
            return next(e);
        }
    }
    )(req, res, next);
}