const path = require("path");
const rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development:{
        db:"mongodb://localhost/Tv-series-db2",
        rootPath:rootPath,
        port:process.env.PORT||9000
    },
    production:{
        db:process.env.DB,
        rootPath:rootPath,
        port:process.env.PORT||80
    }
};