const {MongoClient}=require('mongodb');

let db;

async function connectDB(){
    if(db){
        return db;
    }
    const client=new MongoClient(process.env.MONGO_URL);
    await client.connect();
    db=client.db(process.env.DB_NAME);
    console.log("DB Connected");
    return db;
}
module.exports=connectDB;