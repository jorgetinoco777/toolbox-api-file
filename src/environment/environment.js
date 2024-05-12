const dotenv = require("dotenv");
dotenv.config();
const config = require("config");

const PORT = config.get("port");
const EXTERNAL_API = config.get("externalApi");
const SECRET_KEY = config.get("secretKey");

module.exports = {
  EXTERNAL_API,
  PORT,
  SECRET_KEY,
};
