const Koa = require('koa');
const app = new Koa();

const route1 = require('./routes/route1');
const route2 = require('./routes/route2');


app
    .use(route1.routes())
    .use(route1.allowedMethods());

app
    .use(route2.routes())
    .use(route2.allowedMethods());


app.listen(3000);