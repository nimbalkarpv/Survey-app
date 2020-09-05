const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer();

const dbadduser = require("./db.add.user");


app.get("/a", (req, res) => {
  res.json({ title: "Welcome!!" });
});


app.get("/adduser", async (req, res) => {
  try {

    const input = req.query;


    await dbadduser.addUser(input);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});


app.post("/adduser", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.authenticateUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.post("/sample", upload.none(), async (req, res) => {
  res.json(req.body);
});


app.listen(3000);
