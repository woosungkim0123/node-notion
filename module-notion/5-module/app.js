import { increase, getCount } from "./counter.js";
//import * as counter from "./counter.js";
// counter.js 파일에서 제공하는 export된 함수들을 counter라는 이름 아래에 하나의 object
// 묶어서 가져올 수 있음
// counter.increase();
increase();
increase();
increase();
increase();
console.log(getCount());
