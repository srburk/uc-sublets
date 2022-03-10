
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userController = require('../controllers/user.controller');

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            const user = userController.find_user_by_email(email)
            if (!user) {
                return done(null,false,{message: 'That email is not recognized'});
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;

                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message : 'Incorrect Password'});
                }
            })
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        // find by ID
    });
}
