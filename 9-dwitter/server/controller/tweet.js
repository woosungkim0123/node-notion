import * as tweetRepository from "../data/tweet.js";

/*
  컨트롤러 안에 validation result를 사용x
  컨트롤러에서 디펜던시를 가지고 있기를 원하지않음
  컨트롤러에서는 서버에있는 정말 중요한 비지니스 로직을 가지고 있길 원함
  모델과 통신하고 관련된 데이터를 받아오고 또 데이터가 잘못되었을때 어떻게 에러를 보여줄것인지에 대해서만 
  관심만있음
  유효성 검사는 라우터 쪽에서 해주고 싶음
  
*/
export async function getTweets(req, res) {
  const username = req.query.username;
  const data = await (username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll());
  res.status(200).json(data);
}
export async function getTweet(req, res) {
  const id = req.params.id;
  const tweet = await tweetRepository.getAllById(id);
  if (tweet) {
    return res.status(200).json(tweet);
  }
  return res.status(404).json({ message: `Tweet id(${id}) not found` });
}
export async function createTweet(req, res) {
  const { text, name, username } = req.body;
  const tweet = await tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRepository.update(id, text);
  if (tweet) {
    return res.status(200).json(tweet);
  }
  return res.status(404).json({ message: `Tweet id(${id}) not found` });
}
export async function deleteTweet(req, res) {
  const id = req.params.id;
  await tweetRepository.remove(id);

  res.sendStatus(204);
}
