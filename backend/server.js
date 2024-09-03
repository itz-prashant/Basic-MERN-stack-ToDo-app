const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000
const MONGO = process.env.MONGO_URI

app.use(express.json());
app.use(cors()); 

mongoose.connect(MONGO).then(()=>{
    console.log('MongoDb Connected');
    
}).catch((error)=> console.log(error))

app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
    
})