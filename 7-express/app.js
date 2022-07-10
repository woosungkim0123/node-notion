import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
  // try {
  //   const data = fs.readFileSync("/file.txt");
  // } catch (error) {
  //   res.status(404).send("File not found");
  // }
  // 파일이 다 읽어지면 데이터를 두번째 인자로 전달해서 콜백함수를 실행시켜줘
  fs.readFile("/file.txt", (err, data) => {
    // 마지막 안전망에 안걸림 => 첫번째 인자로 에러가 전달되었기 때문
    // 비동기적인 것을 처리하고 있을 때는 마지막 안전망에 포착되지않음
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("어딘가 에러발생");
});
app.listen(8080);
