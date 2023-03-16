const passport = require('passport');
const passportLocal = require('passport-local');
const passportJwt = require('passport-jwt');
require('dotenv').config()

const localStrategy = passportLocal.Strategy;
const JWTStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const admin = {
  id: 1,
  email: 'admin@hotelmiranda.com',
  password: '12345'
}

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      const user = admin
      try {
        if (email === admin.email && password === admin.password) {
          return done(null, user, { message: 'Logged in succesfully' });
        } else {
          return done(null, false, { message: 'Wrong credentials' });
        }

        //   const validate = await user.isValidPassword(password);

        // if (!validate) {
        //     return done(null, false, { message: 'Wrong Password' });
        // }

      } catch (e) {
        return done(e);
      }
    }
  )
);


passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (token, done) => {
      try {
        return done(null, token.user);
      } catch (e) {
        done(e);
      }
    }
  )
);