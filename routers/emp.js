const express = require('express')
const router = express.Router()

const {getAllEmployees,createEmployee,getEmployeeById,deleteEmployeeById} =require('../controllers/emp')

router.get('/',getAllEmployees)
router.post('/',createEmployee)
router.get('/:id',getEmployeeById)
router.delete('/:id',deleteEmployeeById)
// router.delete('/delById',deleteEmployeeById)
/////
module.exports = router;