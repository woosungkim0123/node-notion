import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  // 동적으로 object 접근 문법
  const value = process.env[key] || defaultValue;
  if (value === null) {
    throw new Error(`key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required("JWT_SECRET"),
    expiresInSec: parseInt(required("JWT_EXPIRES_SEC", 86400)),
  },
  bcrypt: {
    saltRounds: parseInt(required("BCRYP_SALT_ROUNDS", 12)),
  },
  host: {
    port: parseInt(required("HOST_PORT", 8080)),
  },
};
