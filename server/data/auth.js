// abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm

import { getUsers } from "../database/database.js";

/*
  어플리케이션 전반적으로  db를 사용하는 코드를 담고있는 대신에 데이터베이스와 직접 상호작용
  하는 코드들을 data라는 패키지안에 auth와 tweet이라는 각각의 모듈로 서로 관련있는 database에 접근
  할수 있도록 고립을 시켜뒀기 떄문에(캡슐화) 
  db종류를 바꿀떄 어플리케이션코드는 전혀 손대지않고 한곳에서만 업데이트 함
  이게 바로 유지보수성 높음, 확장이 높은 방식
*/
export async function findByUsername(username) {
  // 컬렉션을 가져오고
  return getUsers()
    .findOne({ username })
    .then((data) => {
      console.log(data);
      return data;
    });
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}
