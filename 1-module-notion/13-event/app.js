/* 
node.js 컴퓨터 위에서 동작하는 javascript 런타임 환경이기 떄문에
우리가 브라우저 환경에서는 할수 없었던 os나 process, path, file과 같은 접속할 수 있었다
버퍼나 스트림도 마찬가지

그리고 입출력에 관련된 것은 non-blocking이라서 콜백함수로 등록하거나 promise형태로 비동기적으로
처리할 수 있었다
*/

// 커스텀한 이벤트를 만들 수 있음

const EventEmitter = require("events");
// 가지고 온 클래스를 emitter라는 변수에 EventEmitter 클래스를 가지고 만든 인스턴스를 할당

const emitter = new EventEmitter();
/*
emitter.on("woosung", (args) => {
  console.log("첫번째 콜백함수", args);
});
// emitter에 원하는 개수만큼 콜백함수를 등록할 수 있음
emitter.on("woosung", (args) => {
  console.log("두번째 콜백함수", args);
});
emitter.emit("woosung", { message: 1 });
emitter.emit("woosung", { message: 2 });
emitter.emit("woosung", { message: 3 });
*/
// 이벤트가 발생할때마다 등록된 두가지의 콜백함수가 순차적으로 호출됨
// 이벤트 EventEmitter 라는 것은 nodejs 자체적으로 사용할 수 도 있고 우리가 원한다면 우리가
// EventEmitter 만들어서 이벤트를 발생시킬 수 도 있음

//이벤트 EventEmitter 라는 것은 nodejs 자체적으로 사용하고 있는데
/* 
예를들어 createReadStream 사용하면 ReadStream을 만들어줌
ReadStream이라는 클래스는 stream.Readable이라는 클래스를 상속하고 있는데
Readable => nodejs.Readable 상속, 이것은 결국 EventEmmiter를 상속하고 있는걸 볼 수 있다
 */

// 등록된 콜백함수를 중지할수도있는데 그렇게 하기위해선 변수로 빼줘야함

const callback1 = (args) => {
  console.log("첫번째 콜백함수", args);
};
const callback2 = (args) => {
  console.log("두번째 콜백함수", args);
};
emitter.on("woosung", callback1);
// emitter에 원하는 개수만큼 콜백함수를 등록할 수 있음
emitter.on("woosung", callback2);

emitter.emit("woosung", { message: 1 });
emitter.emit("woosung", { message: 2 });
// 모든 이벤트 삭제도 삭제가능하고  하나만 삭제가능
// 안에 어떤 이벤트인지 명시해줘도되고 명시안하면 모든 이벤트에서 등록된 콜백함수를 제거
//emitter.removeAllListeners();
emitter.removeListener("woosung", callback1);
emitter.emit("woosung", { message: 3 });
