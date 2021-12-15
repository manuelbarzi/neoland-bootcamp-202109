import context from './context'
const { validateToken, validatePassword, validateOldPassword } = require('crowdaids-logic/helpers/validators')

/**
 * Updating the password in the application.
 * 
 * @param {string} token The token to authenticate the retrieve user.
 * @param {string} user The user with the old and new password to be changed.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

 function updateUserPassword(token, user) {
    validateToken(token)
    validateOldPassword(user.validateOldPassword)
    validatePassword(user.password)

    return (async () => {
        const res = fetch(`${context.API_URL}/users`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(user)
        })

        const { status } = res

        if (status === 204) {
            return
        } else  if (status === 400 || status === 401) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknoun error')
    })()
}

export default updateUserPassword