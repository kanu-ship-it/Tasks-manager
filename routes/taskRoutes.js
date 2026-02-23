const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const taskController = require('../controllers/taskController');

//Create a new task
router.post('/', authMiddleware, taskController.createTask);

//Get all tasks for the authenticated user

router.get('/tasks', authMiddleware, taskController.getAllTasks);

//Get a specific task by ID
router.get('/tasks/:id', authMiddleware, taskController.getTaskById);

//Update a task by ID
router.put('/tasks/:id', authMiddleware, taskController.updateTask);

//Delete a task by ID
router.delete('/tasks/:id', authMiddleware, taskController.deleteTask);

module.exports = router;
