import express, { application } from "express";
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

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    // send를 할때는 return 꼭 붙이기
    // next("route"); 다음 미들웨어로 넘어가라 라고 설정할 수 있음
    next(new Error("error")); // 처리하다가 예기치 못한 에러가 발생한다면
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res) => {
  res.setHeader("key", "value");
  res.status(201).send("created");
});

app.use((req, res, next) => {
  res.status(404).send("Not avaliable!@_@"); // not found
});

// ip주소는 우리 서버가 네트워크상 어디있는지 알 수 있다면
// 포트는 서버의 어떤 application에 접속하길 원하는지를 나타냄

// 항상 어플리케이션 마지막에는 에러를 처리하는 것을 달아줘야함
// 에러를 받는 에러 handler를 등록해줘야함
// 미들웨어는 설정된 순서가 매우 중요함
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry try later;");
});
app.listen(8080);
