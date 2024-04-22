const mongoose = require('mongoose')
const { Schema } = mongoose;

const Location = new Schema({
    name: {
        type:String,
    },
    type: {      // giao dịch hay tập kết (warehouse or transactionPoint)
        type:String,
    },
    managerId: {
        type:String,
        // type:mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    warehouseId: {
        type:String,
        // type:mongoose.Schema.Types.ObjectId, ref: 'Location',
    }
  });

  module.exports = mongoose.model('location', Location)