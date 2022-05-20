/*
웹의 기초


HTTP vs HTTPs

Hypertext Transfer Protocol

hypertext를 전송하는 프로토콜의 약자

hypertext는 아주 예전에 텍스트만 링크가 들어있는 문서를 주고받을 때 썼음

요즘은 hyperMedia로 보는게 맞지않나?

HTTP는 request와 response로 이루어진 protocol

클라이언트가 서버에 요청하고 서버가 응답해주는 방식
클라이언트에서 url에 접속하게 되면 해당 url에 맞는 html문서를 보내줌

클라이언트가 특정한 url을 이용해서 서버에게 json을 요구하면 서버는 그에 맞는 json타입을 보내줌


http에 보안이 조금 더 추가된것이 https
hypertext transfer protocol secure

http는 클라이언트와 서버가 데이터를 주고 받을떄 암호화 되어있지 않기때문에 제 3자가 데이터를 가로채서 읽을 수 있음
https  SSL 이나 TLS 같은 조금 더 안전한 방법을 주고 받기 때문에 제 3자가 더이상 그 내용을 볼 수 없음
여기에  사용되는 개념이 공개키, 비밀키

조금 더 간단하게 서로 보안관계가 형성된 클라이언트와 서버끼리 데이터를 안전하게 주고 받으면서 그 데이터를 해독해서 볼 수 있지만
제 3자는 보안관계가 형성되지않아서 볼 수 없음


HTTP 변천과정

HTTP 1989

HTTPS 1994

HTTP V1(HTTP, HTTPS) 1997        

  TEXT-BASED (모든것이 텍스트형태) 클라이언트와 서버가 데이터를 주고 받을때 모든것이 텍스트형태라 다른사람이 볼때 바로 그 내용이해가능
  HTTP HEADER안에도 텍스트들도 그대로 압축하지않은 버전이라 사이즈가 크고 
  한번에 딱 하나의 파일만 전송가능
  

HTTP V2(HTTP(허용해주지않음), HTTPS) 2015  /

  binary base protocol 텍스트를 바이너리형태로(로우 데이터 형태로) 주고 받음
  제 3자가 한눈에 이해하기힘듬
  header부분도 압축해서 주고받음
  multiplexing 여러개 파일을 주고 받을 수 있음



HTTP V3(HTTPS) 2019~

  TCP PROTOCOL로 만든 HTTP와는 다르게 UDP를 베이스로 개선하고 있음







클라이언트 컴퓨터와ㅓ 서버 컴퓨터가 통신을 할떄는 HTTP를 사용하면 TCP CONNECTION이 생김

클라이언트가 request요청

요청을 할때는 내가 어떤행동을 하기를 원하는지 request method와  서버에서 어떤문서에 어떤 경로에 있는 데이터를 받기를 원하는지 url
다양한 정보들을 포함한 headers 를 포함해서 서버에 요청함

서버에서 response 응답

서버는 요청에 해당하는 내용을 response로 클라이언트에게 보내줌
보낼때 성공했는지 실패했는지 status코드를 묶어서 보냄

http2에서는 한 파일 뿐만 아니라 관련된 여러파일들을 동시에 보낼 수 있음





*/
