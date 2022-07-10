import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

// 이렇게 매번 셋팅하는 것이 귀찮 => cors 라이브러리
/*
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, DELETE"
  );
  next();
});
*/

const corsOption = {
  origin: ["http://127.0.0.1:5500"], // 여기서만 사용가능
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors(corsOption));
// 옵션을 안주면 어떤 브라우저로 접속하든 내 데이터를 보여줌

/*
credentials : Access-Control-Allow-Credentials CORS 헤더를 제어합니다. true로 설정될 경우 쿠키, authorization 헤더, TLS 클라이언트 인증서와 같은 자격증명들이 클라이언트에게 노출 된다고 합니다. 이 때, origin은 *가 아닌 정확한 도메인으로 명시되어야합니다.

- maxAge: Access-Control-Max-Age CORS 헤더를 제어합니다. integer(초 단위)를 value로 받으면, 해당 시간만큼 preflight request를 보내지 않고 이전 preflight request에 대한 응답을 캐시하는 시간을 지정해줍니다.

- optionsSuccessStatus: OPTIONS 요청이 성공 했을 때, IE11이나 다양한 스마트 티비 같은 레거시 브라우저에서 204를 제공해주는데, 204 대신 다른 status 코드를 지정해줄 수 있습니다. 

*/

app.use(helmet());
// 네트워크를 보면 헬멧에 의해 추가된 headers를 볼 수 있다
// 보안에 필요한 header들을 추가해줌
app.get("/", (req, res) => {
  // req.cookies 정보를 보려면 기본적으로 undefined로 나옴
  // 이 정보를 보려면 cookieParser를 써야함
  console.log(req.cookies);
  // post man 요청
  // cookie   yummy=choco; falsey=false headers에
  res.send("welcome");
});

app.listen(8080);

/*

Access to fetch at 'http://localhost:8080/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

CORS(Cross-origin resource sharing)

브라우저에서만 가지고 있는 CORS 정책이 있음

client (192.123.0.1)

server(192.123.0.1)

클라이언트와 서버가 동일한 ip주소에서 즉, 동일한 서버에서 동작하고 있다면 리소스를 별다른 제약없이 서로 공유하고 주고 받을 수 있지만

client (192.123.0.1)

server(98.98.0.1)

만약 클라이언트가 서버와 다른 ip에 있다면 원칙적으로 그 어떤 데이터도 주고 받을 수 없음

클라이언트와 서버가 다른 ip에 있을때 데이터를 주고 받을 수 있으려면 서버에서 클라이언트에게 반응을 보낼떄 Access-control-allow-origin 구문을  headers에 추가해줘야지 브라우저에서 
서버가 허용을 해줫으니 이 데이터를 가지고 와서 표기해줘도 되겠구나 라고 받아들여서 클라이언트에서 데이터를 볼 수 있게 됨

*/
