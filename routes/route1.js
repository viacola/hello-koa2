const Router = require('koa-router');
const router = new Router();
const productController = require('../controllers/productController');
router.get('/products', productController.findProducts);

module.exports = router