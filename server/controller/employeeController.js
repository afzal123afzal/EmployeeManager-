const mongoose = require('mongoose')
const Employee = require('../model/employeeModel')


const addEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });

    try {
        await employee.save();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getEmployee = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json(error);
    }
}

const editEmployee = async (req, res) => {
    console.log(req);
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, { ...req.body });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json(error);
    }
}




module.exports = {
    addEmployee,
    getEmployee,
    editEmployee,
    deleteEmployee
}