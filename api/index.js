require('dotenv').config();
const app = require('./app.js');

//port 
const port = process.env.PORT || 4000;

//middlewares 
const logger = require('./src/middleware/loggerMiddleware.js');

//logger middleware
app.use(logger);

app.listen(port, () => {
    console.log(`Server listening on PORT: ${port}`);
});
