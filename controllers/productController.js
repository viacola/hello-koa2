const db = require('../lib/db.js');


module.exports.findProducts = async(ctx, next) => {
    let docs = await db.products.find();
    ctx.body = docs;
};