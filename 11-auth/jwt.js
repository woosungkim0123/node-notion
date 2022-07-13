const jwt = require("jsonwebtoken");

// option은 선택
// payload는 토큰을 보낼때 담고싶은 데이터를 담으면됨
// 토큰에 담고 싶은 정보 (너무 커지면 주고받는데 네트워크 데이터를 소모함으로 정말 필수적인 데이터만 넣기)
// secret키는 서버에서 가지고 있을 중요한 키

const secretKey = "dsaaaaa21-214421=1-24=";
const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secretKey,
  { expiresIn: 2 } // 2초
);

console.log(token); // 토큰이 만들어짐
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzYzNTA5M30.CYSEJKK_0ZCDChBSgTHQMz8yBGgXZ3JeIKmHTHJZCBA

// https://jwt.io/ 해독이 가능

const editToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTc2MzUwOTN9.9geKLZieIwUKR3ki5I36AZHNaFE5fhq45_obaXmxfIA";
// 클라이언트에게 전달받은 변경된 토큰
/*
jwt.verify(editToken, secretKey, (error, decoded) => {
  console.log(error, decoded); // 에러를 띄움
});
*/
// 만료
setTimeout(() => {
  jwt.verify(token, secretKey, (error, decoded) => {
    console.log(error, decoded); // 만료 에러를 띄움
  });
}, 3000);
