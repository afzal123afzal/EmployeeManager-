const express = require('express')
const app = express()
const cors = require("cors")
const db = require('../server/config/dbConnect')
const employeeRouter = require('./router/employeeRoutes')




app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
console.log(req.path,req.method);
next()
})

db.connectToDb()

app.listen(8000,()=>{
    console.log("Listening to port 8000");
})

app.use('/api/employee', employeeRouter)
