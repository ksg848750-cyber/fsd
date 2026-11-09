const express = require("express");
const jwt = require("jsonwebtoken");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

const client = new MongoClient("mongodb://localhost:27017");
const SECRET = "mysecretkey";

async function start() {
    await client.connect();
    const students = client.db("studentDB").collection("student");

    // LOGIN
    app.post("/login", (req, res) => {
        if (req.body.username == "admin" && req.body.password == "1234") {
            res.json({
                token: jwt.sign({ user: "admin" }, SECRET, { expiresIn: "1h" })
            });
        } else {
            res.status(401).send("Invalid login");
        }
    });

    // AUTHENTICATION
    function auth(req, res, next) {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) return res.status(401).send("Token required");

        jwt.verify(token, SECRET, (err) => {
            if (err) return res.status(403).send("Invalid token");
            next();
        });
    }

    // CREATE
    app.post("/api/addStudent", auth, async (req, res) => {
        await students.insertOne(req.body);
        res.send("Added successfully");
    });

    // READ
    app.get("/api/getAll", auth, async (req, res) => {
        res.json(await students.find().toArray());
    });

    // UPDATE
    app.put("/api/update/:id", auth, async (req, res) => {
        await students.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        res.send("Updated successfully");
    });

    // DELETE
    app.delete("/api/delete/:id", auth, async (req, res) => {
        await students.deleteOne({ _id: new ObjectId(req.params.id) });
        res.send("Deleted successfully");
    });

    app.listen(4000, () => console.log("Server running on port 4000"));
}

start();