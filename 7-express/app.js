import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import {} from "express-async-errors";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("/file.txt");
  } catch (error) {
    res.status(404).send("File not found1");
  }
});
app.get("/file2", (req, res) => {
  fs.readFile("/file.txt", (err, data) => {
    if (err) {
      res.status(404).send("File not found2");
    }
  });
});
app.get("/file3", (req, res) => {
  return fsAsync.readFile("/file.txt");
});
app.get("/file4", async (req, res) => {
  const data = await fsAsync.readFile("/file.txt");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("어딘가 에러발생");
});
app.listen(8080);
