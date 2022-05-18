//console에도 많은 api가 있음
console.log("logging");
// 다지움
console.clear();

// log level
// 로그를 남길때 유용(서버의 심각성을 알아차리기 쉽고 에러시 수정하기가 용이)
// level 별로 그냥 출력할건지 저장할건지 컨트롤 할 수 있기 때문에
console.log("log"); // 개발
console.info("info"); // 중요한 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert

//첫번째 인자로 전달한 값이 true가 아닐때 로그로 출력할 수 있음
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

// object 출력

const student = { name: "woosung", age: 31, company: { name: "BC" } };
console.log(student);
// tabale로 출력해줌
console.table(student);
// option을 줄 수 있음
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
// 같은 label의 사이 시간을 측정
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
// 해당하는 레이블이 몇번 호출되었는지 알려줌
function a() {
  console.count("a function");
}

a();
// 카운트를 초기화하고 싶으면
console.countReset("a function");
a();

// trace
// 디버깅시 유용

function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  // 누가 이 함수를 호출했는지 알고싶을때 사용
  console.trace();
}
// f3는 f2에서 호출했고 f2는 f1에서 호출한 사실을 알 수 있음
f1();
