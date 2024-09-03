const TodoModel = require('../model/todo-model')

module.exports.getTodo = async (req, res) =>{
    const toDos = await TodoModel.find()
    res.send(toDos)
}

module.exports.saveToDo = (req, res) =>{
    const {toDo} = req.body

    TodoModel.create({toDo}).then((data)=> {
        console.log('Save sucessfull');
        res.status(201).send(data)
    })
    .catch(err => console.log(err)
    )
}

