const  mongoose  = require("mongoose");

const bcrypt = require('bcrypt-nodejs');

let userSchema = mongoose.Schema({
    firstName: String,
    email: String,
    password: String
});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('users', userSchema);