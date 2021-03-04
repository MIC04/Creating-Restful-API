const express = require("express");
require("./public/db/conn");
const Student = require("./public/model/student");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// Create a New Student
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
  res.send("Hello From Post.");
});

app.listen(port, () => {
  console.log(`Server Is Running on http://localhost:${port}`);
});
