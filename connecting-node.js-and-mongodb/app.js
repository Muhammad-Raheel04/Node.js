require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.set('view engine','ejs');
const client = new MongoClient(process.env.MONGODB_URL);

app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db(process.env.databaseName);
    const collection = db.collection('firstCollection');

    const data = await collection.find().toArray();
    console.log(data);
    res.render('index',{data})
})

app.listen(process.env.PORT);