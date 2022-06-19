const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  host: config.host,
  port: config.port,
  app: {
    keys: env.array("APP_KEYS", "a31f2044fe3e7976", "fe5a456f6d5d6b95"),
  },
});
