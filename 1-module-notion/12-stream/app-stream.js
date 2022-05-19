const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  //highWaterMark: 8, // 기본은 64 Kbytes
  //encoding: "utf-8", // 버퍼의 데이터가 아닌 utf-8로 변환해서
});
// option
// highWaterMark : 한번에 얼마만큼의 데이터를 읽어오는지 정할 수 있음
// 버퍼 사이즈를 결정한다(스트림이 한번에 처리할 수있는 내용을 결정한다)

// 데이터를 순차적으로 읽을 수 있음
// fs에서 읽을떄는 한번에 받아와서 알수 있었다면 스트림은 조금조금씩 읽기 떄문에
// 이벤트 베이스임
// stream에서 데이터가 조금씩 도착하면 우리에게 알려줌
// addListener나 on 등을 사용

// 안에 들어가보면 buffer의 덩어리가 오거나 인코딩을 utf8로 사용햇으면 string으로 올수 있음
const data = [];
readStream.on("data", (chunk) => {
  //console.log(chunk)
  //console.count("data");
  data.push(chunk);
});
// 데이터가 조금조금씩 오면서 콜백함수가 출력되는 것을 알 수 있따
// 8 바이트가 아닌 기본값인 64kb로 읽어오면 금방읽어옴
readStream.on("end", () => {
  console.log(data.join(""));
});
readStream.on("error", console.error);

// 이런식으로도 가능
fs.createReadStream("./file.txt", {})
  .on("data", (chunk) => {
    data.push(chunk);
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", console.error);

// once는 딱 한번만 실행
