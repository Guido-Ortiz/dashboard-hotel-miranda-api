const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.login_post = async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (!user || err) {
                const error = new Error('An error occurred.');

                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, process.env.SECRET_KEY);

                return res.json({ token, user });

            }
            );
        } catch (e) {
            return next(e);
        }
    }
    )(req, res, next);
}