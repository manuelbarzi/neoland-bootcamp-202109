const { CredentialsError, ConflictError, FormatError, NotFoundError } = require("../../../nts-errors");
const { JsonWebTokenError, TokenExpiredError } = require ('jsonwebtoken')

function handleError (error, res) {
    let status = 500
  
    if (error instanceof CredentialsError || error instanceof TokenExpiredError)
        status = 401
    else if (error instanceof TypeError || error instanceof FormatError || error instanceof JsonWebTokenError)
        status = 400
    else if (error instanceof NotFoundError)
        status = 404
    else if (error instanceof ConflictError)
         status = 409

    // if (status < 500)
        //  logger.warn(error.message)
    // else
        //  logger.error(error.message)

    res.status(status).json({ error: error.message })
}

module.exports = handleError

