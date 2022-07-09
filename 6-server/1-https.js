const http = require("http");
const http2 = require("http2"); // https와 함께 적용
// 개발 pc에는 https를 위한 ssl certipicate가 없음
// 그래서 http 사용, 배포시 http2로 변경

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("incomming");
  //console.log(req.headers);
  //console.log(req.httpVersion);
  //console.log(req.method);
  //console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Woosung</title></head>");
    res.write("<body><h1>root page</h1></body>");
    res.write("</html>");
  } else if (url === "/test") {
    // 정적인 html (항상 고정된 문서)
    return fs.createReadStream("./html/index.html").pipe(res); // 여기서 종료
  } else if (url === "/ejs") {
    // 데이터에 맞게 페이지를 동적으로 만들어서 클라이언트에게 보내줄 수 있음
    // 템플릿 엔진
  } else {
    res.write("Not Found");
  }
  res.end();
});

server.listen(8080);
