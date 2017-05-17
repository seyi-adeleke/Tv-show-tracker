const express = require("express");
const passport = require("passport");
let app = express();


let env = process.env.NODE_ENV =  process.env.NODE_ENV || "development";
const config = require("./server/config/config")[env];


require("./server/config/mongoose")(config);
require('./server/config/passport')(passport);
require("./server/config/express")(app,config,passport);
require("./server/config/routes")(app,passport);




