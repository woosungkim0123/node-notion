const fs = require("fs");

// 지금 사용하고 있는 메모리의 상태를 저장
const beforeMem = process.memoryUsage().rss;
// 파일을 다읽은 다음 읽은 데이터를 새로운 file2에 저장
fs.readFile("./file.txt", (err, data) => {
  fs.writeFile("./file2.txt", data, () => {});
  // 메모리 사용량 체크
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  // MB로 출력
  const consume = diff / 1024 / 1024;
  console.log(diff);
  console.log(`${consume} MB`);
});

// 파일이 우리가 가지고 있는 컴퓨터 메모리보다 더 큰 사이즈 파일이라면 안됨
// 이렇게 모든 데이터를 다읽어서 쓰는 것은 비효율적
// stream을 사용하면 조금조금씩 버퍼별로 하나 읽었다가 다시 쓰고 읽고 쓰고.. 반복
