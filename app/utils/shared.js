const logger = {
  info: (req) => console.log(req),
  debug: (req) => console.log(req),
  error: (req) => console.log(req),
  summary: {
    info: (req) => console.log(req),
    debug: (req) => console.log(req),
    error: (req) => console.log(req),
    console: (level, message) => console.log(req),
  },
};

module.exports = {
  logger,
};
