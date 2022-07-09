const http = require("http");
const ejs = require("ejs");

// 서버 메모리 상에 보관
const courses = [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }];

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    ejs
      .renderFile("./template/test.ejs", { courses })
      .then((data) => res.end(data));
  }
});

server.listen(8080);
