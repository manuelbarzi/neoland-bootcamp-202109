const { modifyUser } = require('./../../nts-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('../../nts-api/handlers/helpers')

module.exports = async ( req, res) => {

    const { headers: { authorization }, body:  data   } = req

    try {
         const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        await modifyUser(id, data)
            res.status(204).send()
    } catch (error) {
        handleError(error, res)
    }
}