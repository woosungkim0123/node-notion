let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount1 = getCount;
//module.exports.increase1 = increase;

exports.increase1 = increase;
// 두개는 처음에는 같음  exports가 module.exports를 가르키고 있기 떄문에

console.log(module);

/* 
// 다른 예시 
module.exports.getCount1 = getCount;
console.log(module.exports === exports)
exports = {};
console.log(module.exports === exports)
exports.increase1 = increase 

console.log(module); // getCount밖에 안들어있음

mdoule.exports에 getCount1을 등록한 다음에 exports에 다른 object를 할당하고 다르게 할당한
object 자체에 increase1을 할당했기 떄문에 module.exports와 exports가 전혀 다른 게 되버림
exports 사용시 특정한 값을 바로 할당하면 위험할 수 있음

*/
