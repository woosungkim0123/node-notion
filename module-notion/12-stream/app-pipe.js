// 파이프
const fs = require("fs");
// 압축할 수 있는 모듈
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
// 복사하고자 하는 stream
const writeStream = fs.createWriteStream("./file4.txt");
const writeStream1 = fs.createWriteStream("./file4.zip");
// 스트림의 데이터를 읽어오면서 읽어온 데이터를 그대로 연결하는 것(pipe)
/*
const piping = readStream.pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!!");
});
*/
// 중간에 파이프를 하나 더 연결!
const piping = readStream.pipe(zlibStream).pipe(writeStream1);
piping.on("finish", () => {
  console.log("done!!!");
});

// 파이핑은 서버를 만들때도 도움이됨

const http = require("http");
const server = http.createServer((req, res) => {
  // 파일을 읽은 다음에 메모리에 들어온 데이터를 보내주게됨
  /*
  fs.readFile("file.txt", (err, data) => {
    res.end(data);
  });
  */
  // 이렇게 보내주는 것보다 스트림 자체를 resposne에 piping해서 연결해주면 좋음
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
