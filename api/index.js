require("dotenv").config();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = require("./app.js");

//port
const port = process.env.PORT || 4000;

//limiting the rate of incoming requests
app.use(
  "/api",
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

//middlewares
const logger = require("./src/middleware/loggerMiddleware.js");
const errorHandler = require("./src/middleware/errorHandler.js");
const domPurify = require("./src/middleware/domPurify.js");

//importing routes
const authRoutes = require("./src/routes/authRoutes.js");
const transactionRoutes = require("./src/routes/transactionRoutes.js");

//setting various http headers
app.use(helmet());

//cleaning the req body to remove any script
app.use(domPurify);

//logger middleware
app.use(logger);

//routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

//custom error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`);
});
