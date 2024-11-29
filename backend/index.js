const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 120;

const app = express();
// middlerware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g5uwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const database = client.db("phoneDB").collection("phones");

    // get/read all data
    app.get("/phones", async (_, res) => {
      const cursor = database.find();
      const result = await cursor.toArray();

      res.send(result);
    });

    // get/read One data
    app.get("phones/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const result = await database.findOne(query);
      res.send(result);
    });

    // post/create single data
    app.post("/phones", async (req, res) => {
      const newPhone = req.body;
      const result = await database.insertOne(newPhone);
      res.send(result);
    });

    // update/put a data
    app.put("/phones/:id", async (req, res) => {
      const id = req.params.id;
      const { name, price } = req.body;

      const filter = { _id: ObjectId(id) };
      const option = { upsert: true };

      const updatedPhone = {
        $set: {
          name,
          price,
        },
      };

      const result = await database.updateOne(filter, updatedPhone, option);

      res.send(result);
    });

    // delete a data
    app.delete("/phones/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };

      const result = await database.deleteOne(query);

      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (_, res) => {
  res.send("The server working perfectly");
});

app.listen(port, () => {
  console.log("the server running localhost port on : ", port);
});
