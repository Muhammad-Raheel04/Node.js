require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Local MongoDB working");
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server live at http://localhost:3200");
})