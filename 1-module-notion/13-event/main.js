const logger = require("./logger.js");
/*
logger.log(() => {
  console.log("...doing something");
});
*/

const emitter = new logger.Logger();

emitter.on("log", (event) => {
  console.log(event);
});

emitter.log1(() => {
  console.log('doing Something"');
});
/*
  이벤트 emitter은 한번 객체를 만들면 그 객체 내에서 발생하는 이벤트 한해서 들을 수 있다
  여러가지 이벤트 emiiter 객체를 만들면 다른 emitter에서 발생하는 이벤트는 다른 emitter에서 들을 수 없다. 


*/
