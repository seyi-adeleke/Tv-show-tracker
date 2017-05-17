const Series = require("../models/series.models");
const Users = require("../models/users.models");

exports.list = function(req, res) {
    Series.find({user:req.user.firstName}).sort().limit(12).exec(function(err,series){
        res.render('favourites',{series: series, user : req.user})
    })
};

exports.createFav = function(req,res) {
    var entry = new Series({
        user: req.user.firstName,
        name: req.body.name,
        premierDate: req.body.premierDate,
        status: req.body.status
    });

    entry.save(function (err) {
        if (err) {
            let errMsg = 'Sorry, there was an error saving your favorite. ' + err;

            res.render('/', {user: req.user, firstName: req.body.firstName, message: req.flash(errMsg)});
        }
        else {
            console.log('Your favourite was saved correctly');
            res.redirect('/favourites');
        }
    });

};
exports.getSeriesByID = function(req,res){
    Series.findOne({_id:req.params.id}).exec(function(err,series){
        res.render('show',{series: series, user : req.user})
    })
};