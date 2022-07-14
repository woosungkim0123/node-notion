const TOKEN = "token";

export default class TokenStorage {
  // localStroage 저장시 보안에 안좋음
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}
