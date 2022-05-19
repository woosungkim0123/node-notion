// this
// 브라우저 this와 node.js this가 살짝 다름

// 함수 안에서 this를 호출하면 global이다
function hello() {
  console.log(this === global); // true
}
hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("-----class----");
    console.log(this); // 클래스 자체를 가르킴
    console.log(this === global); // false
  }
}

const a = new A(1);
a.memberFunction();

// 여기까지는 JS와 비슷한데 한가지 다른 점이 있음

console.log("--- global scope ---");
console.log(this); // {}
console.log(this == module.exports);

// 브라우저에서는 밖에서 쓰는 this는 global을 가르켯으나
// nodejs this는 모듈 exports를 가르킴
