const express = require('express');
const router = express.Router();
// const {createEmployee, getEmployeesByLocationId, updateEmployee, deleteEmployee} = require('../controllers/EmployeeController')
const {create, getAll, update, remove } = require('../controllers/transactionPointController') 
// router.use(VerifyJWT);

//createEmployee

router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
module.exports = router;
