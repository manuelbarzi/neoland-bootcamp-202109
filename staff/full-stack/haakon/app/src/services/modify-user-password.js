import context from './context'

/**
 * Modify the password of the user.
 * 
 * @param {string} token Token
 * @param {string} oldPassword OldPaswword
 * @param {string} password Password
 */

const modifyUserPassword = (token, oldPassword, password) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof oldPassword !== 'string') throw new TypeError(`${oldPassword} is not a string`)
    if (!oldPassword.trim().length) throw new Error('oldPassword is empty or blank')
    if (/\r?\n|\r|\t| /g.test(oldPassword)) throw new Error('oldPassword has blank spaces')
    if (oldPassword.length < 6) throw new Error('oldPassword has less than 6 characters')

    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    const user = { oldPassword, password }

    return (async () => {
        const res = await fetch(`http://localhost:8000/api/users`, {
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
        } else if (status === 409 || status === 401) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknoun error')
    })()
}

export default modifyUserPassword