const PORT = process.env.PORT ? process.env.PORT : 3000;
const EXTERNAL_API = process.env.EXTERNAL_API ? process.env.EXTERNAL_API : "";
const SECRET_KEY = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

module.exports = {
  EXTERNAL_API,
  PORT,
  SECRET_KEY,
};
