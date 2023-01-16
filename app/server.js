const express = require("express"); // Load express
const cors = require("cors"); // Load cors
const helmet = require("helmet");
const routes = require("./route");
const CONFIG = require("./config"); // Load config (environment)
// const os = require("os");

const app = express();

// app.use("/api-docs", swaggerUi.serve);
// app.get("/api-docs", swaggerUi.setup(swaggerDoc));

app.set("view engine", "hbs");
app.enable("trust proxy");

// configure app
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);

// Helmet
app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  })
);

// app.use(helmet.noCache());

// Enable CORS on Express server instance
app.use(
  cors({
    credentials: true,
    origin: true,
    methods: "GET,POST,PATCH,DELETE",
  })
);

var auth = async function (req, res, next) {
  next();
};

app.all("*", auth, function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  // res.header("X-Hostname", os.hostname());
  next();
});

// Configure app routes
app.use("/api", routes);

// not found
app.use((req, res) => {
  res.status(404).send();
});

// Start
app.listen(CONFIG.PORT, function () {
  console.log(`Listening on port [ ${CONFIG.PORT} ] [ ${CONFIG.ENV} ]`);
});
