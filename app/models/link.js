var mongoose = require('mongoose');
var db = require('../config');
var crypto = require('crypto');

var urlSchema = mongoose.Schema ({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number 
});

var Link = mongoose.model('Link', urlSchema);

urlSchema.pre('save', function (next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5));
  next();
};

module.exports = Link;

model.set('code', shasum.digest('hex').slice(0, 5));