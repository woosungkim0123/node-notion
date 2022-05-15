console.log("code1");
console.time("timeout 0");
setTimeout(() => {
  console.log("setTimeout0");
  console.timeEnd("timeout 0");
}, 0);
console.log("code2");
setImmediate(() => {
  console.log("setImmediate");
}, 0);

console.log("code3");
process.nextTick(() => {
  console.log("process.nextTick");
});

// code 1, 2, 3이 다 출력되고 테스큐에 들어온 콜백함수를 순차적으로 실행
// nextTick이 우선순위가 젤 높고 setTimeout과 setImmediate 동일하게 동작하기 때문에 큰 차이는 없음

// setTimeout의 0초는 실제로 콜백함수가 실행되기 위해서는 콜스택이 빌때까지 기다려야함으로 사실 0초보다 더 걸릴 수 있음
