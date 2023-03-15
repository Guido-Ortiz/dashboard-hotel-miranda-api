// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;

// const JWTstrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;

const passport = require('passport');
const passportLocal = require('passport-local');
const passportJwt = require('passport-jwt');

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
        if (email === 'admin@hotelmiranda.com' && password === '12345') {
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
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);