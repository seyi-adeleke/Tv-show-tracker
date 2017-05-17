const express = require("express");
const config  = require("./config");
const session = require('express-session');
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const morgan = require("morgan");




module.exports = (app,config,passport) => {
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(bodyParser());


    app.use('/public', express.static(path.join(config.rootPath +'public')));
    app.set('views','public/src/views');
    app.set('view engine', 'ejs');


    app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    app.listen(config.port,  (err) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log('running server on port ' + config.port);
        }
    });

};
