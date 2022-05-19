// 의심가는 곳이 있으면 breakpoint를 걸수있음
// 디버그 실행시 포인트를 잡아둔 곳에서 멈춰있는 것을 알 수 있다
/*
|> 버튼은 그다음 브레이크 포인트로 넘어가는 것
.-> 그다음 버튼은 코드 한줄한줄 씩 확인하면서 넘어갈 수 있는 것
수행은 하는데 코드에서 다른 함수 호출시 다른 함수 안까지는 들어가지 않음 그함수를 호출하고 그 결과를 받아서 다음 라인으로 넘어감
그와 반대로 함수 안까지 들어가는 것이 옆에

디버그 재시작 
디버그 멈춤

왼쪽패널에 코드 상태에 대한 값을 확인 가능
클로저 같은 경우는 함수 내부의 상태를 시각화해서 알 수 있음

조사식의 경우 우리가 조금더 관심있게 지켜보고 싶은 변수나 특정 로직이 있다면 작성 가능

호출 스택의 경우 함수가 호출되기 전까지 어떤 순서대로 어떻게 이함수가 호출되었는지 확인할 수 있음

중단점을 밑에서 확인도 가능


콘솔로그로 확인하려면 소스코드를 변경하고 반영되어서 프로그램을 돌려서 확인해야함

 loop에서 4가 될떄까찌 기다리는 것이아닌 변수에서 i를 4로 만들어주면된다
조사식에서 i === stop 같은 식을 적어놓고 확인할 수 있다

그리고 중단점에 편집을 통해 식을 넣을 수도 있음
그래서 반복문에 계속 실행시키는 것이아닌 i ===3일때만 중단해라라고 하면 거기서 중단함
문장식 뿐만 아니라 몇번 호출되었을때 멈출건지 어떤 로그메시지를 이용할건지 결정할 수 있음

create lauch json을 통해 nodemone으로 디버깅 할 수있음
재시작 안해도됨

{
  // IntelliSense를 사용하여 가능한 특성에 대해 알아보세요.
  // 기존 특성에 대한 설명을 보려면 가리킵니다.
  // 자세한 내용을 보려면 https://go.microsoft.com/fwlink/?linkid=830387을(를) 방문하세요.
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}\\3-debugging\\app.js",
      "runtimeExecutable": "nodemon",
      "restart": true
    }
  ]
}

*/
function sayHello() {
  console.log("hello");
}

function calaculate(x, y) {
  console.log("계산중");
  const result = x + y;
  console.log("result : ", result);
  sayHello();
  return result;
}

calaculate(1, 2);

const stop = 4;
console.log(" looping");
for (let i = 0; i < 10; i++) {
  console.log("count", i);
  if (i === stop) {
    break;
  }
}
