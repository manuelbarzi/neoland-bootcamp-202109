import context from './context'
const { validateToken, validatePassword } = require('./helpers/validators')

function unregisterUser(token, password) {
    validateToken(token)
    validatePassword(password)

    return (async () => {
        const res = await fetch(`${context.API_URL}/users`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password})
        })

        const { status } = res

        if (status === 200)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default unregisterUser