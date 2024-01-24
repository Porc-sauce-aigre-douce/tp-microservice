const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require('express');
const app = express()
app.use(express.json());
const port = 3000;
let conn;
let db;

// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://root:root@screening.4xcmdyt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    conn = await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("screening").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    db = conn.db("screening");
  }
  catch {
    console.log("Something went wrong.")
  }
}
run().catch(console.dir);

// Get a list of 50 screening
app.get("/seance/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  let collection = await db.collection("screening");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

// Get a single post
app.get("/seance/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  let collection = await db.collection("screening");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
app.post("/seance/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  let collection = await db.collection("screening");
  let newDocument = {
    ...req.body,
    _id: "",
    users: []
  };
  newDocument._id = new ObjectId();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update the screening
app.put("/seance/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: { movieId: req.body.movieId,
            date: req.body.date,
            hour: req.body.hour, }
  };
  let collection = await db.collection("screening");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

// Add a user to the screening
app.put("/seance/book/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $push: { users: req.body }
  };
  let collection = await db.collection("screening");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

// Delete an entry
app.delete("/seance/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  const query = { _id: new ObjectId(req.params.id) };
  const collection = db.collection("screening");
  let result = await collection.deleteOne(query);
  res.send(result).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})