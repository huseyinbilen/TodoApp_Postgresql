const express = require('express');

const taskController = require('../controllers/taskController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/', taskController.getTasks);
router.post('/tasks/create', taskController.createTask);
router.post('/tasks/delete', taskController.deleteTask);
router.post('/tasks/update', taskController.updateTask);

router.get('/category', categoryController.getCategory);
router.post('/category/create', categoryController.addCategory);
router.post('/category/delete', categoryController.deleteCategory);

module.exports = router;