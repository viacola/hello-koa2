//const monk = require('monk');
const db = require('monk')('localhost/OrderBase');

//const users = db.get('users');
const products = db.get('Products');

//module.exports.users = users;
module.exports.products = products;
module.exports.close = db.close