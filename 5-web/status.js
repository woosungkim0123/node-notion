/*
서버에서 클라이언트에 응답을 보낼떄 status코드를 포함해서보냄
 숫자 3개로 처리된 결과를 내포하고 있습니다.

 5개 범위
 1xx information 정보
  100 continue
    클라이언트가 어떤것을 요청했을때 잘하고 있어 계속 요청해 라고 할때사용
  102 processing
    요청한거 아직 끝나지는 않았느데 처리하고 있어. 처리 중인것을 나타냄
 2xx 성공 successful
  200 ok 요청 리소스를 찾았으면 성공적
  201 created 클라이언트가 어떤 리소스를 만들길 원한다면 성공적으로 만들어졌다면
  204 no content 요청한거 처리는 했고 거기에 해당하는 데이터는 없어
 3xx redirection을 위해 사용
  301 moved permanently 니가 요청한것은 영구적으로 다른 url로 옮겨갔어 이 url을 이용해
  302 found 요청한거 임시적으로 다른곳으로 갔어 여기를 이용해
  303 see other 302와 비슷한데 get요청에만 사용가능
  // 307, 308 만약 클라이언트가 post로 요청했으면 post에 한해서만 다른곳으로 옮겨갔다면 
  // post요청으로 다른 url로 요청해야겠다 이해할 수 있음
  307 Temporary Redirect 임시적 redirection을 나타냄
  308 Permanent Redirect  영구적 redirection을 나타냄
 4xx 클라이언트가 잘못된 방식으로 요청
  400 bad request 클라이언트가 요청시 쿼리가 잘못됐거나 api를 잘못된 방식으로 사용할떄
  401 unauthorized 특정한 키를 요청할수있는 url인데 권한없는 사람이 요청시(로그인하지않는 사용자가 요청시)
  403 forbidden 로그인한 사용자이긴 하지만 특정한 일을 사용하는 권한이 없을때
  404 Not found 원하는 url이 존재하지않을때
  405 method not allowed 해당 url에 한해서 쓰거나 삭제하는 기능이 허용되지않을때
  409 conflict 클라이언트가 만들고자하는 리소스가 이미 존재하거나 충돌이 날떄

 5xx 서버 예상치못한 에러
  500 internal server error 서버 내부에 문제가 생겨서 처리하지못할때
  502 bad gateway 서버가 요청을 받아서 응답을 처리해야하는데 어떻게 처리할지 모를떄 
  503 service unavailable 서버가 아직 준비가 되지않았을때  특정한 url을 처리할 준비가 되지않았을때

*/
