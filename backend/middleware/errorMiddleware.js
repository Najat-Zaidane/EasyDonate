//in this file we'll have functions that will execute during the response cycle
const errorHandler = (err, req, res, next) => {
    const statusCode =  res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? nul
    })
}