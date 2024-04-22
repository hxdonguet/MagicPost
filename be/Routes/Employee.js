const express = require('express');
const router = express.Router();
const VerifyRoles = require('../middlewares/VerifyRoles');
const VerifyJWT = require('../middlewares/VerifyJWT');
const {createEmployee, getEmployeesByLocationId, updateEmployee, deleteEmployee,getAllEmployees,getEmployeeById,changePassword} = require('../controllers/EmployeeController') 
router.use(VerifyJWT);

//createEmployee

router.get('/', getEmployeesByLocationId);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

router.get('/profile/',getEmployeeById)
router.get('/getAll',getAllEmployees)
router.post('/changePass/:id', changePassword)
module.exports = router;
