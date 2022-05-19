const fs = require("fs").promises;
// 기본적으로 fs 모듈안에 promises들을 가르키고 있음

fs.readFile("./file-new.txt").then(console.log).catch(console.error);
// 파일안의 데이터를 <Buffer 68 65 6c 6c 6f> 버퍼형태로 읽어옴
// option에 인코딩을 전달해줄 수 있음, flag는 파일을 열때 읽기모드 or 쓰기모드를 정할 수 있음

fs.readFile("./file-new.txt", "utf-8").then(console.log).catch(console.error);

// write file

// 쓰는거라 promise가 void라서 아무것도 리턴되지 않음 그래서 then은 안써줘도되지만 catch는 써야한다
// 데이터를 덮어씀
fs.writeFile("./file-new.txt", "<div>hello</div>").catch(console.error);

// 추가할때는 append로 작성해야함
fs.appendFile("./file-new.txt", "<div>hello</div>").catch(console.error);

// copy
fs.copyFile("./file-new.txt", "./file-new2.txt").catch(console.error);

// 모든 것들이 비동기적으로 처리됨으로 우리가 쓰기도 전에 복사했을 수도 있음
// 순차적으로 하고 싶다면
fs.writeFile("./file-new.txt", "<div>hello</div>")
  .then(() => {
    fs.copyFile("./file-new.txt", "./file-new2.txt").catch(console.error);
  })
  .catch(console.error);

// 비동기는 순차적으로 될 수도 있고 안될 수도 있기 때문에 이점을 유의하기
// 순서대로 코드를 작성했지만 모든 것이 promise임으로 비동기적으로 처리하기 때문에 순서가 보장되지않음.
/*
// folder
fs.mkdir("sub-foler").catch(console.error);
*/
// 해당 경로에 있는 모든 파일 이름을 읽어올 수 있음
fs.readdir("./").then(console.log).catch(console.error);

// api 사용시 인자는 어떤 것이 있는지 추가옵션인자가 있는지 함수에서 리턴되는 값은 무엇인지 promise라면 catch를 사용해서 에러를 잡아내야한다
