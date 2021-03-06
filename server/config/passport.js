const LocalStrategy = require('passport-local').Strategy;
const flash    = require('connect-flash');
const User = require('../models/users.models');


module.exports = (passport)=>{

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true //
    }, function(req, email, password, done) {
        process.nextTick(function() {
            User.findOne({'email':email }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                }
                else{


                    let newUser = new User();
                    newUser.firstName = req.body.firstName;
                    newUser.email    = email;
                    newUser.password = newUser.generateHash(password);
                    newUser.save(function(err) {
                        if (err){
                            throw err;
                        }
                        return done(null, newUser);
                    });
                }

            });

        });

    }));


    passport.use('local-login', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true //
        },
        function(req, email, password, done) {
            User.findOne({ 'email' :  email }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                return done(null, user);
            });

        }));



};