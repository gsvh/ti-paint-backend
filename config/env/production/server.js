module.exports = ({ env }) => ({
  url: env(MY_HEROKU_URL),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["a31f2044fe3e7976", "fe5a456f6d5d6b95"]),
  },
});
