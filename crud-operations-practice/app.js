require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const connectDB = require('./db');
const { ObjectId } = require('mongodb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection('firstCollection');
        const students = await collection.find().toArray();
        res.render('form', { students, editStudent: null });
    } catch (err) {
        console.error("error reading students data");
        res.status(500).send("Error reading students");
    }
})
app.post('/create', async (req, res) => {
    const { id, name, age, course } = req.body;
    const db = await connectDB();
    const collection = db.collection('firstCollection');
    if (id) {
        await collection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    name, age: Number(age), course
                }
            }
        )
    } else {
        await collection.insertOne({ name, age: Number(age), course });
    }

    res.redirect('/');
});
app.get('/delete/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection('firstCollection');
        const students = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    } catch (err) {
        console.error("error reading students data");
        res.status(500).send("Error reading students");
    }
    res.redirect('/');
})
app.get('/edit/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection('firstCollection');
        const students=await collection.find().toArray();
        const editStudent=await collection.findOne(
            {_id:new ObjectId(req.params.id)}
        )
        res.render('form',{students,editStudent})
    } catch (err) {
        console.error("error reading students data");
        res.status(500).send("Error reading students");
    }
})
app.listen(process.env.PORT, () => {
    console.log("Visit http://localhost:3200");
})