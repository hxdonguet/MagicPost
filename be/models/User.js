const mongoose = require('mongoose')
const { Schema } = mongoose;

const User = new Schema({
    username: {
        type:String,
    },
    password: {
        type:String,
    },
    email: {
        type:String,
    },
    phoneNumber: {
        type: Number,
    },
    name: {
        type:String,
    },
    role: {
        type:String,
        default:"user",  // Admin, Manager, Employee, User
    },
    workPlace: {
        type: String,  // TransactionPoint or Warehouse
    },
    locationId: {
        type:String
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

  module.exports = mongoose.model('user', User)