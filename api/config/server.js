module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS','STRIPE_KEY','REACT_APP_STRIPE_APP_KEY','REACT_APP_STRIPE_PUBLISHABLE_KEY'),
  },
});
