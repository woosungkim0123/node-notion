import express from "express";
const app = express();

// all 과 use 차이

// all은 어떤 메서드로 보내든(post, delete든)
// 항상 수행이 됨
// api/doc 에 접속시 수행이 되지않음 (경로에 한해서만)
app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

// 반대로 use의 경우 sky로도 호출, sky/doc으로 해도 호출
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

// 이런식으로 가능하긴함
app.all("/api*", (req, res, next) => {
  console.log("all*");
  next();
});

app.get("/", (req, res) => {
  res.status(201).send("created");
});

app.use((req, res, next) => {
  res.status(404).send("Not avaliable!@_@");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry try later;");
});
app.listen(8080);
