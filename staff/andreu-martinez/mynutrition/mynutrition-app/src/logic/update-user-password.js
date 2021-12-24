import context from './context'

function updatePassword(token, oldPassword, password) {
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



    return (async () =>{

        const res = await fetch(`${context.API_URL}/users`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token, oldPassword, password })
        })

        const { status } = res

        if (status === 201)
            return
        else if (status === 401 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')

    })
}

export default updatePassword