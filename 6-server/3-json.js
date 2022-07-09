const http = require("http");

// 서버 메모리 상에 보관
const courses = [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }];

const server = http.createServer((req, res) => {
  const url = req.url; // what?
  const method = req.method; // how?
  if (url === "/json") {
    if (method === "GET") {
      res.writeHead(200, { "Cotent-Type": "application/json" });
      res.end(JSON.stringify(courses));
    } else if (method == "POST") {
      // 옛날 버퍼 방식
      const body = [];
      // data라는 이벤트가 발생하면 받은 데이터 자체를 body 배열에 추가
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      // req 이벤트가 모든 데이터가 받아지는 end 이벤트가 발생하면
      req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        console.log(bodyStr);
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(courses);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
