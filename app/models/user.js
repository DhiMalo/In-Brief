var mongoose = require('mongoose');
var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var userSchema = mongoose.Schema ({
  username: {type: String, index: { unique: true }},
  password: String
});

var User = mongoose.model( 'User', userSchema ); 
  
User.prototype.comparePassword: function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if( err ) { throw err };
    callback(isMatch);
  });
},

userSchema.pre('save', function (next){
  var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.password = hash;
        next();
      });
  }
});

module.exports = User;
