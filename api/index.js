require('dotenv').config();
const app = require('./app.js');

//port 
const port = process.env.PORT || 4000;

//middlewares 
const logger = require('./src/middleware/loggerMiddleware.js');
const errorHandler = require('./src/middleware/errorHandler.js');

//importing routes 
const authRoutes = require('./src/routes/authRoutes.js');
const transactionRoutes = require('./src/routes/transactionRoutes.js');

//logger middleware
app.use(logger);

//routes 
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on PORT: ${port}`);
});
