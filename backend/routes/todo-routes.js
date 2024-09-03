const { Router } = require('express');
const { getTodo, saveToDo, deleteToDo, updateToDo} = require('../controller/todo-controller');

const router = Router();

router.get('/get', getTodo);
router.post('/save', saveToDo);
router.delete('/delete/:id', deleteToDo);
router.put('/update/:id', updateToDo);

module.exports = router 