export default class Httpclient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      // res에 body가 없는 경우에도 에러발생할수있음(실제로 에러는 아니니 출력만해줌)
      console.error(error);
    }
    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : "Something went wrong!";
      throw new Error(message);
    }

    return data;
  }
}
