require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const mongoDB = require('./db');
const corsOptions = require('./config/corsOptions')
mongoDB();

// app.options('*', cors());
// app.use(cors())
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/employees/', require('./Routes/Employee'))
app.use('/api/auth', require("./Routes/Auth"))
app.use('/api/packages', require('./Routes/Package'))
app.use('/api/transaction', require('./Routes/TransactionPoint'))
app.use('/api/warehouse', require('./Routes/Warehouse'))
app.use('/api/search',require('./Routes/Search'))
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})