const express = require("express");
const app = express();
const PORT = 8000;

const people = {
  "alice": {
    "age": 20,
    "gender": "Female",
  },
  "bob": {
    "age": 24,
    "gender": "Male",
  },
  "john": {
    "email": "john@mail.com",
    "date": "2022-01-13",
    "age": 63,
    "test": true,
  },
  "unknown": {
    "age": "Unknown",
    "gender": "Unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:people", (req, res) => {
  const name = req.params.people.toLowerCase();
  if (people[name]) {
    res.json(people[name]);
  } else {
    res.json(people["Unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`);
});
