const mongoose = require('mongoose')
const { Schema } = mongoose;

const Warehouse = new Schema({
    name: {
        type: String,
    },
    location: {
        province: {
             type:String,
        },
        district: {
         type:String,
        }
     },
    managerId: {
        type: String,
        // type:mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    createdDate: {
        type: Date,
        default:Date.now
    },
    updatedDate: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('warehouse', Warehouse)