const ApiError = require('../exceptions/ApiError');
const logger = require('../logger')

module.exports = function (err, req, res, next) {
    logger.info(err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    return res.status(500).json({message: 'Непредвиденная ошибка'})
};