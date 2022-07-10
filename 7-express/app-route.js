import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); // REST API, Body Parsing
app.use(express.urlencoded({ extended: false })); // HTML Form, Body Parsing

const options = {
  dotfiles: "ignore", // 숨겨진 파일 보여주지않음
  etag: false,
  index: false,
  maxAge: "1d", // 얼마나 오랫동안 캐시가 가능한지
  redirect: false,
  setHeaders: function (req, path, stat) {
    // 필요한 데이터를 헤더에 추가해서 보냄
    res.set("x-timestamp", Date.now());
  },
};
app.use(express.static("public", options)); // public 안에 있는 모든 리소스(파일, HTML)에 접근가능 옵션:

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("어딘가 에러발생");
});
app.listen(8080);
