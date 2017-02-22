const Router = require('koa-router');
const router = new Router();
//const productController = require('../controllers/productController');
//router.get('/products', productController.findProducts);
router.get('/route2/abc', async(ctx, next) => {
    ctx.body = 'route2/abc';
});

module.exports = router