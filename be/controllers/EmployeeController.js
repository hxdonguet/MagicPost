const bcrypt = require('bcryptjs');
const User = require('../models/User')


const createEmployee = async (req, res) => {
    try {
        const username = await User.findOne({ username: req.body.username })
        if (username) {
            return res.status(400).json({ errors: "duplicated" })
        }
        //encrypt password
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)
        await User.create({
            username: req.body.username,
            password: secPassword,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            name: req.body.name,
            workPlace: req.workPlace,
            locationId: req.locationId,
            role: req.body.role
        })
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err })
    }
}

const getAllEmployees = async (req, res) => {
    try {
        const arrEmployees = await User.find({});
        res.status(200).json(arrEmployees)
    } catch (err) {
        console.log(err);
        res.status(500).json({ err })
    }
}

const getEmployeesByLocationId = async (req, res) => {
    try {
        const { locationId, role } = req.query;
        // console.log(typeof(role))
        const roles = !role.includes(',') ? role : role.split(',');
        let query;
        if (locationId == undefined) {
            query = {
                role: { $in: roles }
            }
        } else {
            query = {
                locationId: locationId,
                role: { $in: roles }
            };
        }
        const arrEmployees = await User.find(query);
        res.status(200).json(arrEmployees)
    } catch (err) {
        console.log(err);
        res.status(500).json({ err })
    }
}


const getEmployeeById = async (req, res) => {
    try {

        const employee = await User.findById(req.query.id);
        res.status(200).json([employee])
    } catch (err) {
        console.log(err);
        res.status(500).json({ err })
    }
}


const updateEmployee = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        })
        res.status(200).json("Update Success")
    } catch (err) {
        console.log("delete Failed");
        res.status(500).json(err);
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.body.id);;
        res.status(200).json(user)
    } catch (err) {
        console.log("delete Failed");
        res.status(500).json(err);
    }
}

const changePassword = async (req, res) => {
    try {
        const user = await User.findById(req.body.id);
        const pwdCompare = await bcrypt.compare(req.body.oldPwd, user.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "incorrect password" })
        }
        const newPass = await bcrypt.hash(req.body.newPwd)
        await User.findByIdAndUpdate(req.body.id, {
            password: newPass
        })
        res.status(200).json("success")
    } catch (err) {
        console.log("change Failed");
        res.status(500).json(err);
    }
}

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeesByLocationId,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    changePassword,
}