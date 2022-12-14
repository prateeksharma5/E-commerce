const express=require('express')

const app= express();

const errorMidleware=require("./middleware/error")

app.use(express.json())

//route imports
const product= require('./routes/productRoute')
app.use('/api/v1',product);

//middleware error

app.use(errorMidleware);

module.exports=app