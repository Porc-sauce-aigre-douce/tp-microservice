const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require('express');
const app = express()
app.use(express.json());
const port = 3001;
let conn;
let db;

// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://root:root@users.4xcmdyt.mongodb.net/?retryWrites=true&w=majority";

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
    await client.db("users").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    db = conn.db("users");
  }
  catch {
    console.log("Something went wrong.")
  }
}
run().catch(console.dir);

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Get a single post
app.get("/user/:username", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  let collection = await db.collection("users");
  let query = { username: req.params.username };
  let result = await collection.findOne(query);
  if (!result) {
    res.send("Not found").status(404);
  }
  else {
    res.send(result).status(200);
  }
});

// Add a new document to the collection
app.post("/user/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  let collection = await db.collection("users");
  let newDocument = {
    ...req.body,
    _id: "",
  };
  newDocument._id = new ObjectId();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})