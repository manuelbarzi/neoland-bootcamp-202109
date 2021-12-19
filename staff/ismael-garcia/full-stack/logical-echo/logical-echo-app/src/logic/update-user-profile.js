import context from './context'
const { validateToken, validateData } = require('./helpers/validators')
/**
 * Updates the user's profile in the application.
 * 
 * @param {string} token The token sent by the server when the user is authorized.
 * @param {object} data An object that contains password and can contain new email and new password.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
 function updateUserProfile(token, data) {
    validateToken(token)
    validateData(data)

    return (async () => {
        const res = await fetch(`${context.API_URL}/users`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const { status } = res 

        if (status === 204)
            return  
        else if (status === 400 || status === 401) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('Unknown error')
    })()
}

export default updateUserProfile