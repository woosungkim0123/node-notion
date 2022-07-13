const bcrypt = require("bcrypt");

const password = "absad123";

// 암호화에 관련 => 계산 cpu사용
// 8 ~ 12 (서버상태에 따라)
// 지금은 동기 프로젝트시 비동기
const hashed = bcrypt.hashSync(password, 10);

console.log(`password: ${password} , hashed: ${hashed}`);

const result = bcrypt.compareSync("abcd123", hashed);
