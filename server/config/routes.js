const express = require("express");
const seriesController = require("../controllers/series.controllers");

module.exports = (app,passport)=>{

    //index
    app.get('/',  (req, res) =>{
        res.render('index',{
            user : req.user
        });
    });

    app.post('/', function(req,res){
        return seriesController.createFav(req,res);
    });

    //login
    app.get('/login', (req, res) =>{
        res.render('login', { message: req.flash('loginMessage'), user : req.user });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    }));


    //signup
    app.get('/signup', (req, res)=> {
        res.render('signup', { message: req.flash('signupMessage'), user : req.user  });
    });

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: '/signup',
            failureFlash: true
        }
    ));
    //logout
    app.get('/logout',(req,res)=>{
        req.logout();
        res.redirect('/');
    });

    //favourites
    app.get('/favourites',isLoggedIn,(req,res)=>{
        seriesController.list(req,res);
    })

};


function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}