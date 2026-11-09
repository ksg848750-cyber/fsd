const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

async function start() {
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    const db = client.db("studentDB");
    const students = db.collection("student");

    // CREATE
    app.post("/add", async (req, res) => {
        await students.insertOne(req.body);
        res.send("Student Added");
    });

    // READ
    app.get("/all", async (req, res) => {
        res.json(await students.find().toArray());
    });

    // UPDATE
    app.put("/update/:id", async (req, res) => {
        await students.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        res.send("Student Updated");
    });

    // DELETE
    app.delete("/delete/:id", async (req, res) => {
        await students.deleteOne({
            _id: new ObjectId(req.params.id)
        });
        res.send("Student Deleted");
    });

    app.listen(4000, () => console.log("Server running"));
}

start();