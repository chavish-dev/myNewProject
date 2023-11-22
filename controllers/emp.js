const employeesList = [
    {id:"11",name:"havi"},
    {id:"2",name:"yael"},
    {id:"3",name:"rina"},
]

exports.getAllEmployees = (req,res)=>{
res.send(employeesList)
}

exports.createEmployee=(req,res)=>{
    employeesList.push(req.body)
    res.send(employeesList)
}

exports.getEmployeeById=(req,res)=>{
    const {id} = req.params
    console.log(req.params);
const emp = employeesList.find(x=>x.id===id)
if(!emp)
{
    res.status(404).json({massege:"emp not found"})
}
res.send(emp)
}


exports.deleteEmployeeById=(req,res)=>{
const id = req.params.id

const index = employeesList.findIndex(x=>x.id === id)
// if(index!==-1)
// {
    employeesList.splice(index,1)
// res.send("")

// }
// console.log(id);
res.send(employeesList)
}