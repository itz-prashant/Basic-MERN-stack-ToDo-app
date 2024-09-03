const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    toDo: {
        type: String,
        requird: true
    }
})

module.exports = mongoose.model('ToDo_DB', todoSchema)