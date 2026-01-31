require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const connectDB = require('./db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'pages'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'form.html'));
})
app.post('/create', async (req, res) => {
    const { name, age, course } = req.body;

    try {
        const db = await connectDB();
        const collection = db.collection('firstCollection');
        const result = await collection.insertOne({
            name,
            age:Number(age),
            course
        })
        console.log(result);
        res.send(`student created with id ${result.insertedId}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error creating student");
    }
});
app.get('/students',async(req,res)=>{
    try{
        const db=await connectDB();
        const collection=db.collection('firstCollection');
        const students=await collection.find().toArray();
        console.log(students);
        res.render('student',{students});
    }catch(err){
        console.error("error reading students data");
        res.status(500).send("Error reading students");
    }
})
app.listen(process.env.PORT, () => {
    console.log("Visit http://localhost:3200");
})