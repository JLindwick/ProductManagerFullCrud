const productManager = require('../controllers/productManager.controller');
module.exports = function(app){
    app.get('/api', productManager.index);
    app.post('/api/product',productManager.createProduct)
    app.get('/api/products',productManager.getAllProducts)
    app.get('/api/product/:id',productManager.getProduct)
    app.put('/api/product/:id',productManager.updateProduct)
    app.delete('/api/product/:id',productManager.deleteProduct);
}