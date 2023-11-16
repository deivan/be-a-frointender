
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<login>:<password>@cluster0.j0oyw53.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  let db, arr = null;

  try {
    db = client.db("sample_mflix");
    db.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // arr = await db.listCollections().toArray();
  } finally {
    await client.close();
  }
  return arr;
}

module.exports = run;