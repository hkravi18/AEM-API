require("dotenv").config();
const helmet = require("helmet");

const app = require("./app.js");

//port
const port = process.env.PORT || 4000;

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
