const User = require('../models/User');
const Warehouse = require('../models/Warehouse')



//api/warehouse/
//GET
const getAll = async(req,res) =>{
    try{
        const arrWarehouse = await Warehouse.find({});
        // const district = await District.findOne({provinceId: transactionPoints.location.Province})
        res.status(200).json(arrWarehouse)
    }catch(err){
        console.log(err);
        res.status(500).json('getAll failed')
    }
}


//api/warehouse/
//POST
const create = async (req, res) => {
    try {
        const location = {
            province: req.body.province,
            district: req.body.district
        }
        const warehouse = await Warehouse.create({
            name: req.body.name,
            location: location,
            managerId: req.body.managerId,
        })
        res.status(200).json(warehouse)
    } catch (err) {
        console.log(err);
        res.status(500).json('create failed')
    }
}

//api/warehouse/:id
//PUT
const update = async (req, res) => {
    try {
        const warehouse = await Warehouse.findById(req.body.id)
        if(warehouse.managerId !== req.body.managerId) {
            await User.findByIdAndUpdate(req.body.managerId, {
                locationId: warehouse.id,
                workPlace: "Warehouse"
            })
        }
        const location = {
            province: req.body.province,
            district: req.body.district,
        }
        const updatedWarehouse = await Warehouse.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            location: location,
            managerId: req.body.managerId,
            updatedDate: new Date()
        })
            
        res.status(200).json(updatedWarehouse)
    } catch (err) {
        console.log(err);
        res.status(500).json('update failed')
    }
}

//api/warehouse/:id
//DELETE
const remove = async (req, res) => {
    try {
        const transactionPoint = await TransactionPoint.create({
            name: req.body.name,
            location: {
                province: req.body.province,
                district: req.body.district,
            },
            managerId: req.body.managerId,
            warehouseId: req.body.warehouseId,
            employees: []
        })
        res.status(200).json(transactionPoint)
    } catch (err) {
        console.log(err);
        res.status(500).json('delete failed')
    }
}


const getWarehouseById = async () => {
    try {
        const warehouse = await Warehouse.findOne({
           id: req.body.id
        })
        res.status(200).json(warehouse)
    } catch (error) {
        console.log(err);
        res.status(500).json('get Failed')
    }
}



module.exports = {
    create,
    getAll,
    update,
    remove,
    getWarehouseById
}