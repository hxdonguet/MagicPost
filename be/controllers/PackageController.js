const Package = require('../models/Package')
const Location = require('../models/Location')
const TransactionPoint = require('../models/TransactionPoint')
const Warehouse = require('../models/Warehouse')


const createPackage = async (req, res) => {
    try {
        // const location = await Location.findById(req.locationId);
        const transaction = await TransactionPoint.findById(req.locationId)
        const history = [{
            id: req.locationId,
            name: transaction.name
        }]
        const currentLocation= {
            id :req.locationId,
            name: transaction.name
        }
        await Package.create({
            //sender
            senderName: req.body.senderName,
            senderContact: req.body.senderContact,
            senderCity: req.body.senderCity,
            senderTown: req.body.senderTown,
            senderAddress: req.body.senderAddress,
            //receiver
            receiverName: req.body.receiverName,
            receiverContact: req.body.receiverContact,
            receiverCity: req.body.receiverCity,
            receiverTown: req.body.receiverTown,
            receiverAddress: req.body.receiverAddress,
            //package
            packageName: req.body.packageName,
            packageWeight: req.body.packageWeight,
            weightCaculationUnit: req.body.weightCaculationUnit,
            packageLength: req.body.packageLength,
            packageWidth: req.body.packageWidth,
            packageHeight: req.body.packageHeight,
            packageNote: req.body.packageNote,
            packageDeliveyMethod: req.body.packageDeliveyMethod,
            packagePrice: req.body.packagePrice,
            history: history,
            currentLocationId:req.locationId,
            nextLocationId: '',
            status: "PENDING",
        })
        res.json({ "message": "success" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
}

const updateStatus = async (req, res) => {
    try {
        let locationId;
        if(req.workPlace === 'Transaction') {
            // nếu là điểm giao dịch thì chuyển hàng đến điểm tập kết
            const transactionPoint = await TransactionPoint.findById(req.locationId);
            const warehouse = await Warehouse.findById(transactionPoint.warehouseId);
            locationId = {
                id: warehouse.id,
                name: warehouse.name
            };
        } else {
            // tìm điểm giao dịch của phía người nhận
            const location = {
                province: req.body.receiverCity,
                district: req.body.receiverTown
            }
            const transactionPoint = await TransactionPoint.findOne({location: location}) // dựa vào tỉnh và huyện
            //nếu địa chỉ điểm tập kết nơi người nhận trùng với điểm hiện tại chuyển đến điểm giao dịch
            // nếu không thì chuyển đến điểm tập kết mới
            if(req.locationId === transactionPoint.warehouseId) {
                locationId = {
                    id : transactionPoint.id,
                    name : transactionPoint.name,
                };
            }else {
                const warehouse = await Warehouse.findById(transactionPoint.warehouseId)
                locationId = {
                    id: warehouse.id,
                    name: transactionPoint.name
                };
            }
        }
        const updatedPackage = await Package.findByIdAndUpdate(req.body.id, { 
            $set : {
                status: req.body.status,
                nextLocationId: locationId
            }
        },{new: true});
        res.status(200).json(updatedPackage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
}


const receivePackage = async(req,res) => {
    try {
        let placeType;
        if(req.workPlace === 'Transaction') {
            placeType = await TransactionPoint.findById(req.locationId)
        }else {
            placeType = await Warehouse.findById(req.locationId)
        }
        const currentLocation = {
            id :req.locationId,
            name: placeType.name
        }
        const package = await Package.findByIdAndUpdate(req.body.id, {
            $set : {
                status: 'PENDING',
                currentLocationId: currentLocation,
                nextLocationId: '',
            },
            $push : {
                history: {
                    id: req.locationId,
                    name: placeType.name
                }
            }
        },
        {new: true}
        )
        res.status(200).json(package)
    }catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
}

const deletePackage = async (req,res) => {
    try {
        await Package.findByIdAndDelete(req.body.id)
        res.status(200).json('delete success')
    } catch( err) {
        console.log(err);
        res.status(500).json({err})
    }
}

const getAllPackages = async (req, res) => {
    try {
        const arrPackages = await Package.find({})
        res.status(200).json(arrPackages)
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
}

const getPackagesById = async(req, res) => {
    try {
        const arrPackages = await Package.find({locationId:req.locationId})
        res.status(200).json(arrPackages)
    }catch(err) {
        console.log(err);
        res.status(500).json({ err });
    }
}

const getPackagesByLocationId = async(req, res) => {
    const {currentLocationId, nextLocationId} = req.query;
    // console.log(currentLocationId)
    // console.log(nextLocationId)
    try {
        let arrPackages;
        if(currentLocationId) {
            arrPackages = await Package.find({'currentLocationId.id' : currentLocationId})
        }
        else {
            arrPackages = await Package.find({'nextLocationId.id': nextLocationId})
        }
        // const arrPackages = await Package.find({currentLocationId:req.query.currentLocationId})
        res.status(200).json(arrPackages)
    }catch(err) {
        console.log(err);
        res.status(500).json({ err });
    }
}


const getPackagesByStatus = async(req,res) => {

}

module.exports = {
    createPackage,
    updateStatus,
    receivePackage,
    deletePackage,
    getAllPackages,
    getPackagesById,
    getPackagesByStatus,
    getPackagesByLocationId,
};