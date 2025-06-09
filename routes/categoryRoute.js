const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

//router.get('/categories', categoryController.getCategories);
router.post('/', categoryController.createCategory);
//router.get('/categories/:id', categoryController.getCategoryById);
//router.put('/categories/:id', categoryController.updateCategory);
//router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
