const passport = require('passport');
const jwt = require('jsonwebtoken');

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
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

                return res.json({ token });

            }
            );
        } catch (e) {
            return next(e);
        }
    }
    )(req, res, next);
}

exports.login_get = (req, res) => {
    res.send('Holaaaaaaa')
}