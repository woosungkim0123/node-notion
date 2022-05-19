// 콜스택과 테스크큐를 넘나드는 타이머
// global 객체에 정의되어있어서 import 안해도됨

let num = 1;
const interval = setInterval(() => {
  console.log(num);
  num++;
}, 1000);

setTimeout(() => {
  console.log("Timeout");
  clearInterval(interval);
}, 6000);
