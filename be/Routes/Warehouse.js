const express = require('express');
const router = express.Router();
// const {createEmployee, getEmployeesByLocationId, updateEmployee, deleteEmployee} = require('../controllers/EmployeeController')
const {create, getAll, update, remove, getWarehouseById } = require('../controllers/warehouseController') 
// router.use(VerifyJWT);

//createEmployee

router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
router.get('/:id', getWarehouseById)
module.exports = router;
