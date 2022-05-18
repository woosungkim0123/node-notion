const fs = require("fs");
// 파일에서 기본적으로 할 수 있는 동작 -> fs 모듈

// 모든 api는 3가지 형태로 제공됨
// 1. 비동기  필요한 인자와 callback을 전달해주면 nodejs에 필요한 일을 다한다음  callback함수를 호출해줌
// 예시: rename(..., callback)
// 2. 동기 Sync= blocking  따로 콜백함수를 전달하지않는다. 끝날때까지 다음줄로 넘어가지 않음
// 예시: renameSync (....)
// 3. promise형태로 제공
//  promises.rename().then().catch(0)

/* 
  rename(..., callback(error, data)) 
  callback은 보통 에러발생시 error, 성공해서 데이터가 받아왔는지 data 인자를 통해 알 수 있다
  renameSync 가 붙은 아이는 따로 에러가 된 상황을 전달해주지 않음으로 try catch로 감싸줘야함


// 에러발생 -> 노드죽음(뒤 코드가 수행되지 않고 멈춤)
// 이렇게 에러가 발생할 수있는 것은 항상 try와 catch로 감싸줘야함
try {
  // 동기적으로 수행됨으로 끝날떄까지 다음줄로 넘어가지 않음
  // 가급적 사용하지않기!
  fs.renameSync("./text.txt", "./file-new.txt");
} catch (err) {
  console.log(err);
}

console.log("hi");

// 비동기적으로 파일이름 변경\
fs.rename("./file-new.txt", "./text.txt", (err) => {
  console.log(err);
});
console.log("hello");
*/
// 콜백 방식이 더러우면

fs.promises
  .rename("./text.txt", "./file-new.txt")
  .then(() => console.log("done")) // 없어도됨
  .catch(console.error); // err => console.error(err)  전달하는 인자가 동일하면  줄이기가능
