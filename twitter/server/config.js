import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
<<<<<<< HEAD
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
=======
  // 동적으로 object 접근 문법
  const value = process.env[key] || defaultValue;
  if (value === null) {
    throw new Error(`key ${key} is undefined`);
>>>>>>> 0623030b5808f20c393aa455e031db9c6717e358
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required("JWT_SECRET"),
    expiresInSec: parseInt(required("JWT_EXPIRES_SEC", 86400)),
  },
  bcrypt: {
<<<<<<< HEAD
    saltRounds: parseInt(required("BCRYPT_SALT_ROUNDS", 12)),
=======
    saltRounds: parseInt(required("BCRYP_SALT_ROUNDS", 12)),
>>>>>>> 0623030b5808f20c393aa455e031db9c6717e358
  },
  host: {
    port: parseInt(required("HOST_PORT", 8080)),
  },
<<<<<<< HEAD
  db: {
    host: required("DB_HOST"),
    user: required("DB_USER"),
    databse: required("DB_DATABASE"),
    password: required("DB_PASSWORD"),
  },
=======
>>>>>>> 0623030b5808f20c393aa455e031db9c6717e358
};
