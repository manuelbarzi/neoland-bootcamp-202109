import context from './context'

/**
 * Unregister a user of a aplication
 * 
 * @param {*} token 
 * @param {*} password 
 */

const unregisterUser = (token, password) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    return (async () => {
        const res = await fetch(`http://localhost:8000/api/users`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ password })
        })

        const { status } = res

        if (status === 201) {
            return
        } else if (status === 400 || status === 401) {
            const { error } = await res.json()
            if ('jwt expired' === error) {
                delete sessionStorage.token
            }
            throw new Error(error)

        } else throw new Error('unknown error')
    })()
}

export default unregisterUser