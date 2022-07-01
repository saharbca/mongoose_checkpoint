const express=require('express')
const app= express()
const mongoose=require('mongoose')
//conx db with server
const MONGO_URI="mongodb+srv://sahar:sahar@mongoose.beammvh.mongodb.net/?retryWrites=true&w=majority"
const port=5000
app.listen(port,(err)=>{
    err ? console.log(err) : console.log('server is running on port 5000')
})
// connect to db
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    err ? console.log(err) : console.log('database is connected')
}) 
//parse the data
app.use(express.json())
//import the routes
app.use('/Person',require('./Routes/personRouter'))