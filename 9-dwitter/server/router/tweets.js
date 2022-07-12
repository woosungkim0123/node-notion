import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();
// validation 하는 이유
// db에 접근해서 읽고 쓰고 하기 전에 네트워크 비용 같은 시간과 비용을 절약하기 위해
// 저장하기 전에 데이터가 유효성검사하는게 좋음
// sanitization를 통해 데이터를 일관성있게 보관하기 위해서
const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("텍스트는 적어도 3글자 적어"),
  validate,
];

router.get("/", tweetController.getTweets);
router.get("/:id", tweetController.getTweet);
router.post("/", validateTweet, tweetController.createTweet);

router.put("/:id", validateTweet, tweetController.updateTweet);

router.delete("/:id", tweetController.deleteTweet);

export default router;
