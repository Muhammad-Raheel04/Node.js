require('dotenv').config();
const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();

const client = new MongoClient(process.env.MONGODB_URL);

app.get('/',async (req,res)=>{
await client.connect();
    const db = client.db(process.env.databaseName);
    const collection =db.collection('firstCollection');

    const result =await collection.find().toArray();
    console.log(result);
    res.send(result);
})

app.listen(process.env.PORT);