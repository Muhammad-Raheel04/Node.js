const express=require('express');
const multer=require('multer');
const path=require('path');
const app=express();

const upload=multer({dest:'./public/data'});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})
app.listen(3200,()=>{
    console.log('Server running on http://localhost:3200');
})