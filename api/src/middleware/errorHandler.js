const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    err.message = err.message || "server error";

    console.error(`ERROR (${err.source}): ${err.message}`);
    if (process.env.NODE_ENV === "development") {
        console.error(`ERROR STACK: ${err.stack}`);
    }    
    
    res.status(err.status).json({
        ok: false,
        error: err.message,
        data: {}
    })
};

module.exports = errorHandler;