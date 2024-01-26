
module.exports = {

  jwtSecret:"demoCode",// config/keys.js
  google: {
    clientID: '127895542254-m231c2he3niqcssj7he8j4cqql9n9gg8.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  session: {
    cookieKey: 'jamesBond',
  },
    PORT: process.env.PORT || 3000,
    MONGODB_URI: `mongodb+srv://gohalal:${encodeURIComponent(process.env.PASS)}@cluster0.pgvmzlp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    JWT_SECRET: process.env.JWT_SECRET || 'hellow',
  };
  