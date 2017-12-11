var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

userSchema.pre('save', function(next) {
   var user = this;
   if (!user.isModified('password')) return next();
   // password has been changed = salt and hash it
   bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
       if (err) return next(err);
       //override the user provided the password with the hash
       user.password = hash;
       next();
   })
  
  });
module.exports = mongoose.model('User', userSchema);