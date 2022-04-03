module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfb23a5ddc11d2738c6f64ee96bca051'),
  },
});
