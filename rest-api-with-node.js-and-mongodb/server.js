require('dotenv').config();
const express = require("express");
const {MongoClient} = require('mongodb');


const app = express();
const client=new MongoClient(process.env.MONGODB_URL);

client.connect().then((connection)=>{
    const db=connection.db(process.env.DATABASE_NAME);

    app.get('/api',async (req,res)=>{
        const collection =db.collection('firstCollection');
        const data=await collection.find().toArray();
        res.send(data);
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})