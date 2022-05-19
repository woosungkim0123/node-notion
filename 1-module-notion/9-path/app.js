// nodejs는 컴퓨터 위에서 동작하기 떄문에 파일 시스템에 접근하기가 쉬움
const { isAbsolute } = require("path");
const path = require("path"); // 경로

// 운영체제마다 경로가 다르게 표시됨
// 파일 접근시 순수하게 'c/file.txt' 이런식으로 접근하면 오류가 남
// 운영체제 별로 경로 표기법이 달라져도 잘 동작할 수 있도록 만드는게 중요함

console.log(__dirname); // 현재 수행되고 있는 디렉토리 이름
console.log(__filename); // + 파일이름

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename

console.log(path.basename(__filename)); // 파일 정보만 읽어옴
console.log(path.basename(__filename, ".js")); // 파일이름만 가져옴

// dirname
console.log(path.dirname(__filename)); // 디렉토리 이름만 가져올 수 있음

// extension
console.log(path.extname(__filename)); // 확장자만 가져옴

// parse
// 전체 경로를 하나하나씩 분리가능(object 형태)
const parsed = path.parse(__filename);
console.log(parsed);

// 경로 object -> 경로 string
const str = path.format(parsed);
console.log(str);

// isAbsolute (절대경로인지 상대경로인지)

console.log("isAbsolute", path.isAbsolute(__dirname)); // /Users/ 절대경로 -> True
console.log("isAbsolute", path.isAbsolute("../")); // 상대경로면 -> False

// normalize
// 이상한 경로면 고쳐준다
console.log(path.normalize("./foler//////////sub")); // 하나만 들어간 것을 알 수 있다

// join
// 현재 디렉토리 안에 서브 폴더를 만들려면
console.log(__dirname + path.sep + "image");

// join을 이용하여 좀더 간편하게
console.log(path.join(__dirname, "image"));

// 운영체제 별로 경로를 표기하는 표기법이 달라질 수 있으니 손으로 직접 작성하기 보다는 path.sep을 사용하거나 join을 사용하여
// 운영체제별로 사용할 수 있도록 하는 것이 중요
