const path = require("path");

if (!process.env.NODE_ENV) {
  require("dotenv-safe").config({
    path: path.join(__dirname, "./env/.env"),
    sample: path.join(__dirname, "./env/.env"),
  });
} else if (process.env.NODE_ENV === "uat") {
  require("dotenv-safe").config({
    path: path.join(__dirname, "./env/uat.env"),
    sample: path.join(__dirname, "./env/.env"),
  });
} else if (process.env.NODE_ENV === "production") {
  require("dotenv-safe").config({
    path: path.join(__dirname, "./env/production.env"),
    sample: path.join(__dirname, "./env/.env"),
  });
} else {
  require("dotenv-safe").config({
    path: path.join(__dirname, "./env/.env"),
    sample: path.join(__dirname, "./env/.env"),
  });
}

module.exports = {
  NODE: process.env.NODE,
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  PATH_PUBLIC_KEY: process.env.PATH_PUBLIC_KEY, 
  PAGINATION: {
    LIMIT: process.env.LIMIT,
    SKIP: process.env.SKIP,
    ORDER: process.env.ORDER,
  },
};
