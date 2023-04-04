const express = require('express')
const router = express.Router()
const {
    addEmployee,
    getEmployee,
    editEmployee,
    deleteEmployee
} = require('../controller/employeeController')

///// add employee
router.post('/',addEmployee)

///////get employee
router.get('/',getEmployee)

////////edit employee
router.patch('/employee-edit/:id',editEmployee)

////////delete employee
router.delete('/employee-del/:id',deleteEmployee)



module.exports = router