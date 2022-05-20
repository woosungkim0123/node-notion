/*
매달 사진을 업데이트 
picture 폴더 안에 달별로 보관
사진과 동영상을 분리해서 업데이트
동영상 -> video
captured -> png, aae
duplicated -> 수정한 사진이 있을경우 원본사진

*/
// nodemon app.js test 로 시작
const path = require("path");
const os = require("os");
const fs = require("fs");

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Pictures", folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("please enter folder name in Pictures");
}
const videoDir = path.join(workingDir, "video");
const captureDir = path.join(workingDir, "capture");
const duplicateDir = path.join(workingDir, "duplicate");

// 동기적 처리가 필요함

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicateDir) && fs.mkdirSync(duplicateDir);

// 전달하는 인자와 호출하는 인자가 동일하면 생략가능
fs.promises.readdir(workingDir).then(processFiles).catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      moveFile(file, videoDir);
    } else if (isCapturedFile(file)) {
      moveFile(file, captureDir);
    } else if (isDuplicatedFile(files, file)) {
      moveFile(file, duplicateDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicatedFile(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }
  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function moveFile(file, targetDir) {
  console.info(`${file} 이동 ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath) //
    .catch(console.error);
}

/*fs.promises
  .readdir(workingDir)
  .then((files) => processFiles(files))
  .catch(console.error);*/
// const fs = require("fs");

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const day = new Date();

// const makeFolder = (dir) => {
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);
//   }
// };
// makeFolder(`${__dirname}/picture`);
// makeFolder(`${__dirname}/picture/${monthNames[day.getMonth()]}`);

// function moveFile(oldPath, newPath, callback) {
//   let readStream = fs.createReadStream(oldPath);
//   let writeStream = fs.createWriteStream(newPath);
//   readStream.on("error", callback);
//   writeStream.on("error", callback);
//   readStream.on("close", function () {
//     fs.unlink(oldPath, callback);
//   });
//   readStream.pipe(writeStream);
// }

// fs.promises
//   .readdir("./")
//   .then((data) => {
//     data.forEach((element) => {
//       const mimeType = element.slice(-4);
//       if (mimeType === ".mp4" || mimeType === ".mov") {
//         const videoDirection = `${__dirname}/picture/${
//           monthNames[day.getMonth()]
//         }/video`;
//         makeFolder(videoDirection);
//         moveFile(
//           `${__dirname}/${element}`,
//           `${videoDirection}/${element}`,
//           () => {
//             console.log("hi");
//           }
//         );
//       } else if (mimeType === ".aae" || mimeType === ".png") {
//         const capturedDirection = `${__dirname}/picture/${
//           monthNames[day.getMonth()]
//         }/captured`;
//         makeFolder(capturedDirection);
//         moveFile(
//           `${__dirname}/${element}`,
//           `${capturedDirection}/${element}`,
//           () => {
//             console.log("hi");
//           }
//         );
//       } else if (mimeType === ".jpg") {
//         console.log(element);
//         if (element.indexOf("_E") !== -1) {
//           const duplicatedDirection = `${__dirname}/picture/${
//             monthNames[day.getMonth()]
//           }/duplicated`;
//           const file_nm = element.replace(/\_E/g, "_");
//           makeFolder(duplicatedDirection);
//           moveFile(
//             `${__dirname}/${file_nm}`,
//             `${duplicatedDirection}/${file_nm}`,
//             () => {
//               console.log("hi");
//             }
//           );
//         }
//       }
//     });
//   })
//   .catch(console.error);
