const process = require("process");

// 현재 사용하고 있는 node의 process 정보를 얻어 올 수 있다
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 내가 등록한 콜백함수를 테스크큐에 넣어달라고 할 때 사용할 수 있음
// 여기 모든 함수가 끝난 다음에 0초 후에 setTimeout 콜백함수가 실행됨
// nextTick도 비슷함. 지금 말고 콜스택에 있는 것 다 수행한 후에 테스큐에 내 콜백함수를 넣었다가 실행해줘
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// nextTick은 테스크큐에 다른 콜백함수가 이미 들어 있어도 그 순서를 무시하고 테스큐 큐 제일 앞부분에 넣는다
// nextTick이 먼저 실행되는 걸 알 수 있다
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
