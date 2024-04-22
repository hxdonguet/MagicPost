const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://nduyy003:1234qwerd@cluster0.pldnqim.mongodb.net/?retryWrites=true&w=majority://nduyy003:1234qwerd@cluster0.pldnqim.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async() => {
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: { w: 'majority' },
        })
        console.log('Connect DB Success');
    } catch(err){
        console.log("Error connecting: " + err)
    }
    
}

module.exports = mongoDB;


