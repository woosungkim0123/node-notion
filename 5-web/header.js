/*
http  특징
1. stateless protocol 
  한가지요청에는 state가 없다

  클라이언트가 서버에 요청햇을때 요청을하는 개별적인 요청은 서로 연관되어있지않음
  어떤 순서대로하든 어떤걸 먼저하든 항상 그 요청 그대로 온전한 데이터를 가지고 있어야합니다
  http요청을할떄 이 요청을 먼저하고 그다음 이요청을 하고 이렇게 연관되어있지않음


  상태가 없는 프로토콜에서 사용자가 로그인되었다는 것을 알 수있을까?

  session과 cookies 이용

  클라이언트가 서버에 로그인 요청시 서버에서 클라이언트에게 로그인성공했어라고 로그인에 필요한 정보를 담은 header를 보내주게 됨

  다양한 방식이 있지만 보통은 set-cookie로 로그인 토큰은 이거야 나에게 요청을할때 이 토큰을 이용하면 니가 누군지 알아봐줄게

  그러면 클라이언트에서는 브라우저 클라이언트에만 쿠키가있음

  쿠키는 브라우저에서 잠시 보관하고 있는 저장소


  stateless지만 쿠키와 헤더를 이용해서 다양한 정보들을 보냄

  서버에서 정보를 줄때 헤더에 cache-control을 명시할수있음
  내가 주는 데이터는 내일까지 캐싱을 해놔(보관)


  헤더안에는 약속된 표준적인 헤더내용이있고 standard

  우리만의 header(custom)이 있음

  custome 사용시 예전에는 x- 다음에 원하는 데이터를씀(x-auth)
  
  2012년부터는 권고되지않음

  표준으로바뀐것이있는데 표준으로 있는것과 충돌이 날 수 있기 떄문에

  domain-key
  domain.key 
  이런식으로 사용
  예시
  imageedit.com-key

  auth토큰을 
  x-auth처럼 커스텀된것을 사용하는ㄱ ㅕㅇ우가 많은데

  되도록 header에서 표준화가 된 authorization이라는 header를 사용하는게 좋음

  왠만하면 표준화 키워드 쓰고 어플리케이션에 특화된것을 저장할 때에는 custom사용


  표준화된 헤더

  User-Agent

  운영체제에 대한 정보와 플랫폼에 대한 정보

  Authorization

  로그인에 관련된 정보 저장시 헤더에 저장할떄는

  서버에서 보내주는 response 헤더안에는

  content-length      bytes  컨텐츠가 얼마나큰지
  content-type text/html | application/json 타입에 대한것
  content-language en 언어에 대한것

  cache-control
  서버에서 클라이언트에게 얼마나 오랬동안 캐시(저장해야하는지)

  Cache-control: max-age =<second>
  Cache-control: no-cache

  https://developer.mozilla.org/ko/docs/Web/HTTP/Headers 


  











*/
