/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

passport.use(new LocalStrategy(
    function (username, password, done) {
        db.Users.findOne({where: {email: username}}).then((user, err)) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            }
            return done(null, user);
        });
    }
));

router.get('/api/signin', function(req, res, next) {

})

router.post('/register', function (req, res, next) {
    var hash = bcrypt.hashSync(req.body.password, 10);
    db.Users.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        password: hash
    }).then(function (result) {
        res.json(result);
    });
});