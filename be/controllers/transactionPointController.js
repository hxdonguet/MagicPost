const TransactionPoint = require('../models/TransactionPoint');
const User = require('../models/User')


//api/transactionPoint/
//GET
const getAll = async (req, res) => {
    try {
        const transactionPoints = await TransactionPoint.find({});
        // const district = await District.findOne({provinceId: transactionPoints.location.Province})
        res.status(200).json(transactionPoints)
    } catch (err) {
        console.log(err);
        res.status(500).json('getAll failed')
    }
}


//api/transactionPoint/
//POST
const create = async (req, res) => {
    try {
        const location = {
            province: req.body.province,
            district: req.body.district
        }
        const transactionPoint = await TransactionPoint.findOne({ location: location })
        if (transactionPoint) {
            res.status(400).json({ errors: "duplicated" })
        }
        const newTransactionPoint = await TransactionPoint.create({
            name: req.body.name,
            location: {
                province: req.body.province,
                district: req.body.district
            },
            managerId: req.body.managerId,
            // warehouseId: req.body.warehouseId,
        })
        res.status(200).json(newTransactionPoint)
    } catch (err) {
        console.log(err);
        res.status(500).json('create failed')
    }
}

//api/transactionPoint/:id
//PUT
const update = async (req, res) => {
    try {
        const transactionPoint = await TransactionPoint.findById(req.body.id)
        if (transactionPoint.managerId !== req.body.managerId) {
            await User.findByIdAndUpdate(req.body.managerId, {
                locationId: transactionPoint.id,
                workPlace: "Transaction"
            });
        }
        const location = {
            province: req.body.province,
            district: req.body.district,
        }
        const updatedTransaction = await TransactionPoint.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            location: location,
            managerId: req.body.managerId,
            // warehouseId: req.body.warehouseId,
            updatedDate: new Date()
        })
        res.status(200).json(updatedTransaction)
    } catch (err) {
        console.log(err);
        res.status(500).json('update failed')
    }
}

//api/transactionPoint/:id
//DELETE
const remove = async (req, res) => {
    try {
        const transactionPoint = await TransactionPoint.findByIdAndDelete(req.body.id)
        res.status(200).json(transactionPoint)
    } catch (err) {
        console.log(err);
        res.status(500).json('delete failed')
    }
}



module.exports = {
    create,
    getAll,
    update,
    remove
}