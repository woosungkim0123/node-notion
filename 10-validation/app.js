import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};
// sanitization : 유효성 검사 이후 데이터를 정확하게 소독해야함
/*
이름에 스페이스를 3개 보내면 비어있는데 생성됨
유효성 검사를 할때는 사용자에게 받은 데이터를 sanitization 해줘야한다


*/
app.post(
  "/users",
  [
    // 배열이 아니라 나열해도됨
    body("name")
      .notEmpty()
      .withMessage("이름을 입력해") // min에 걸리기 때문에 필요없긴함
      .trim()
      .isLength({ min: 2 })
      .withMessage("이름은 두글자 이상!"),
    body("age").notEmpty().isInt().withMessage("숫자를 입력해"),
    body("email").isEmail().withMessage("이메일 입력해요").normalizeEmail(),
    body("job.name").notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [param("email").isEmail().withMessage("이메일 입력해요"), validate],
  (req, res, next) => {
    res.send("💌");
  }
);

app.listen(8080);
