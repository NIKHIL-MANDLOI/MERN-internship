const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const students = [
  {
    id: 1,
    name: "nikhil",
    course: "Computer Science",
  },
  {
    id: 2,
    name: "chayan",
    course: "Mechanical Engineering",
  },
  {
    id: 3,
    name: "manish",
    course: "Information Technology",
  },
  {
    id: 4,
    name: "darshan",
    course: "Electronics",
  },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});