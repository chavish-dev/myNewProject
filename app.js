

const express = require('express')


const empRoutes = require('./routers/emp')
const app= express()
app.use(express.json())

 app.use('/emp',empRoutes)

// const employeesList = [
//     {id:"1",name:"havi"},
//     {id:"2",name:"yael"},
//     {id:"3",name:"rina"},
// ]
// app.get('/emp',(req,res)=>{
//     res.send(employeesList)
// })


// app.post('/emp',(req,res)=>{
//     console.log(req);
//     employeesList.push(req.body)
//     res.send(employeesList)

// })

app.listen(8000,()=>{
    console.log("port 8000")
})



// delete
// localhost//:http:9000/emp