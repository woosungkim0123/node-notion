/*
url : uniform resource locator

리소스가 어디에 있는지 고유한 값을 나타내는 주소

url은 다양한 프로토콜에서 사용할 수 있음

https://   프로토콜
www.naver.com   hostname
:4433 port(생략가능)
/courses/backend       pathname(경로)
?q=love   쿼리


이처럼 url은 클라이언트가 서버 특정한 위치에 있는 리소스에 접근하기위해서
서버에있는 무엇을 원하는지 나타낼수있고
함께 사용하는 request methods는 리소스를 이용해서 어떤 액션을 원하는지 명시할수 있음

사용할수있는 종류
get get (가지고옴)
post create (url을 가리키고있는곳에 무언가를 만들고 싶다)
put replace  (기존 url에 있는 데이터를 업데이트하고싶을떄 )
delete (삭제하고싶을떄)
patch 부분적으로 업데이트
head 헤드만받고싶을떄
options 해당url에서 사용가능한 request option을 알고싶을떄
trace 서버야 살아있니? 내요청에 살아있는지 반응해봐

하나의 예제일뿐

get  200, 401 403 404 405

post 무언가를 생성하는 201, 401, 403, 404, 409

put delete patch 200 204 403 404 405

head 200 401 403 404 405


서버에 있는 리소스를 읽기만할떄(변경하지않을떄) -> get head options trace

면접용

서버에 있는 데이터를 변경하는 요청은? post put delete patch


get 
 요청하는것에는 바디 없음
  성공한 응답에는 해당하는 데이터가 들어있어야함
  safe : 여러번요청해도 서버데이터를 읽어오기떄문에 서버 변경하지않기떄문에 안전함
  idempotent(멱등성) : 동일한 요청 을 여러번 했을때 몇번했냐 상관없이 항상 서버를 동일한
  상태로 유지할 수 있냐를 나타냄
  cacheable : 캐시가 가능함
  서버에서 캐시를 할 수 있음

put은 원하는 url 전체적으로 업데이터

idempotent이 yes
캐쉬 불가능

patch 부분적 업데이트

idempotent이 no

url에 해당하는 데이터를 전부 업데이트하는게 아니라 부분적으로 업데이트함으로
서버에서 어떻게 구현했냐에따라 달라질 수 있음

부분적으로 업데이트하는 내용을 추가하는 기능의 서버라면 추가가 되니 idempotent이 no


delete 한번삭제가 된것은 계쏙 삭제가 되어있으니

idempotent yes


https://developer.mozilla.org/ko/docs/Glossary/Idempotent 

*/
