const express = require('express');
const router = express.Router();
const VerifyRoles = require('../middlewares/VerifyRoles')
const VerifyJWT = require('../middlewares/VerifyJWT')
const VerifyLocation = require('../middlewares/VerifyLocation')
const {createPackage, updateStatus, getAllPackages, getPackagesById, getPackagesByStatus, getPackagesByLocationId, receivePackage, deletePackage} = require('../controllers/PackageController')

router.use(VerifyJWT)

router.get('/', getPackagesByLocationId);
//Tao don
router.post('/',createPackage)
//Update don hang 
router.put('/:id',updateStatus);
// router.get('/packages',getAllPackages);
router.delete('/:id', deletePackage);

router.get('/getAll', getAllPackages)

router.put('/receive/:id', receivePackage);

router.get('/getPackagesById', getPackagesById);

router.get('/getPackagesByStatus', getPackagesByStatus);






module.exports = router
