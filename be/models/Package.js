const mongoose = require('mongoose')
const { Schema } = mongoose;

//Hang hoa
const Package = new Schema({
    senderName: {
        type: String,
    },
    senderContact: {
        type: String,
    },
    senderCity: {
        type: String,
    },
    senderTown: {
        type: String,
    },
    senderAddress: {
        type: String,
    },
    receiverName: {
        type: String,
    },
    receiverContact: {
        type: String,
    },
    receiverCity: {
        type: String,
    },
    receiverTown: {
        type: String,
    },
    receiverAddress: {
        type: String,
    },
    packageName: {
        type: String,
    },
    packageWeight: {
        type: String,
    },
    weightCaculationUnit: {
        type: String,
    },
    packageLength: {
        type: String,
    },
    packageWidth: {
        type: String,
    },
    packageHeight: {
        type: String,
    },
    packageNote: {
        type: String,
    },
    packageDeliveyMethod: {
        type: String,
    },
    packagePrice: {
        type:String,
    },
    status: {
        type:String, // Pending -> Transportation -> Delivery -> Success, Failed , 
    },
    currentLocationId: {
        id: {type:String,},
        name: {type:String}
    },
    nextLocationId: {
        id: {type:String,},
        name: {type:String}
    },
    history : [
        {
            id: {type:String},
            name: {type:String}
        }
    ],
    dateUpdate: {
        type: Date,
        default:Date.now
    },
    dateSent: {
        type: Date,
        default: Date.now,
    },
    dateReceived: {
        type: Date,
        default: Date.now,
    },
  });

  Package.pre('updateOne', function() {
    this.set({dateUpdate: new Date().now})
  })

  module.exports = mongoose.model('package', Package)