const EventEmitter = require("events");
const emitter = new EventEmitter();
class Logger extends EventEmitter {
  log1(callback) {
    // Logger자체는 emit을 가지고 있음(상속)
    this.emit("log", "started...");
    callback();
    this.emit("log", "end");
  }
}
module.exports.Logger = Logger;

/*

// 특정함수를 받은다음 실행전에 emit에 log이벤트를 발생시키고 실행후 마지막에 emit에 log이벤트 발생
function log(callback) {
  emitter.emit("log", "started...");
  callback();
  emitter.emit("log", "end");
}
// 다른 곳에서 사용할 수 있도록
// 다른곳에서 사용시 주의점은 동일한 emitter 객체를 사용해야함
// 우리 스스로 이벤트 emiiter가 되면됨
module.exports.log = log;

*/
