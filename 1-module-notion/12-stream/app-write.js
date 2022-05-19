const fs = require("fs");

// write 스트림

const writeStream = fs.createWriteStream("./file3.txt");

writeStream.on("finish", () => {
  console.log("finish");
});
writeStream.write("hello");
writeStream.write("hello");
writeStream.write("hello");
writeStream.write("world");
// 이까지 작성하면 완료되지않음
// 쓰는데 끝나는 이벤트를 통해서 처리하고 싶다면
writeStream.end();
