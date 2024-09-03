const { Router } = require('express');
const { getTodo, saveToDo} = require('../controller/todo-controller');

const router = Router();

router.get('/get', getTodo);
router.post('/save', saveToDo);

module.exports = router 