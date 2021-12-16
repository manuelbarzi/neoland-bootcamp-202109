const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

function extractUserIdFromToken(req) {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    const payload = jwt.verify(token, SECRET)

    const { sub: id } = payload

    return id
}

module.exports = extractUserIdFromToken