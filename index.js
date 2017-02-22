//测试的例子

const db = require('./lib/db.js');
//const Products = db.get('Products');

(async() => {

    let doc = await db.products.find();
    console.log(doc);
    db.close();
})();