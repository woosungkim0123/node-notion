// npm
// node package manager
// 라이브러리 관리자
// 좋은 라이브러리도 있지만 똥같은 라이브러리도 있음
// 좋은 라이브러리를 잘찾아 사용하자
/*
npm init  -> package.json이라는 프로젝트 모든 라이브러리 정보 파일 생성

라이브러리를 하나라도 추가하게되면 node_modules라는 폴더가 자동생성되고 npm repository에서 해당 라이브러리 소스코드를 node_module안으로 들고오게됨

npm을 설치하면 자동으로 설치되는 npx가 있음
npm이 특정라이브러리 다운받아서 설치하는 개념
npx는 따로 라이브러리를 우리 pc에 저장하지않고 바로 실행할 수 있게 해줌
yarn은 npm이 가지고 있는 문제점을 개선하기 위해 만들어졌음

*/

// 개별적으로 이름을 만들면 npm run 이름을 넣어주면됨
// npm 사용가능한 start, restart.. 은 npm start로 가능

/* 
버전 정보 
1.0.0
1 major . 0 minor . 0 patch

출시한 버전에 버그가 발생하거나 사소한 오류 잡을땐 patch를 올림

기능이 추가되거나 작은 기능 추가시 minor 버전 업데이트

기존의 제품에서 정말 다른 기능들이 대거  수정되거나 추가되거나 1.0.0에서 동작하는 기능에
변경사항이 발생하면 major 버전을 업데이트함

1.0 or 1.0.x or ~1.0.4 : 1.0은 유지하되 어떤 버전도 받을수있다(패치)

1 or 1.x or ^1.0.4 Major만  고정하고 어떤 마이너와 패치 버전도 받아도 상관없을떄

* or x : 너무너무 위험한 어떤 major도 상관하지않고 받겠다 (쓰지말기)
// 마이너도 살짝 위험
https://semver.npmjs.com

npm install은 한 패키지를 다받을수도있고 패키지안에 여러가지 scope으로 잘게 나눠져있다면\
잘게 나눠진것만 받아올 수 있음
github url에서 받아 올 수 도 있음

npm에서 내 프로젝트 뿐만아니라 컴퓨터 전체에 필요한경우는  npm i -g 글로벌 옵션을 줘서
필요한것을 받을 수 있음
npm list -g 글로벌로 설치된 npm list를 보여줌
npm ll 프로젝트 패키지

하나를 설치하면 한가지를 위해 필요한 dependency가 설치되고 dependency에 필요한  또 다른 라이브러리가
중첩적으로 설치됨으로 많은 것이 설치

내가 설치한 것만 보고싶을떄 npm ll -g --dept=0
*/

/*
  npm view 라이브러리명을 통해 특정한 라이브러리 정보를 볼 수 있음 -> npm 사이트 이용해도됨
  package-lock ^1.13.3" 메이저 버전 1까지만 고정해놓고 나머지는 허용해뒀기떄문에  협업시 정확히 이 버전을 이용해서 프로젝트를 했다를
  기억할 필요가 있기때문에 package-lock에 정확하게 어떤 버전을 사용했는지 나와있음
  수정할일 절대 없음


  라이브러리 업데이트 방법

  npm outdated를 통해 업데이트가 필요한 나열해주는 명령어를 이용해서 현재버전과 원하는 버전과 최근버전을 알아볼 수 있음
  npm update 지정해논 wanted까지 dependencies를 업데이트 할 수 있음
  특정 라이브러리만 골라서 업데이트 가능

  개발할때만 필요한 dependencies가 있음
  
*/
