const os = require("os");

// 운영체제마다 새로 줄바꿈을 할때 들어가는 문자열이 달라지는 경우가 있음
// 맥
console.log(os.EOL === "\n");
// 윈도우
console.log(os.EOL === "\r\n");

// 내 서버가 동작하고 있는 환경에 대한 정보를 얻어올때 os 모듈 사용가능
