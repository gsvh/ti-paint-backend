module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", "a31f2044fe3e7976", "fe5a456f6d5d6b95"),
  },
});
