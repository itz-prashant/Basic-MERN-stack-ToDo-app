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

module.exports.updateToDo = (req, res) =>{
    const {id} = req.params
    const {toDo} = req.body

    TodoModel.findByIdAndUpdate(id,  {toDo}).then(()=> {
        res.send('Update sucessfull')
    })
    .catch(err => console.log(err)
    )
}

module.exports.deleteToDo = (req, res) =>{
    const {id} = req.params

    TodoModel.findByIdAndDelete(id).then(()=> {
        res.send('Delete sucessfull')
    })
    .catch(err => console.log(err)
    )
}

