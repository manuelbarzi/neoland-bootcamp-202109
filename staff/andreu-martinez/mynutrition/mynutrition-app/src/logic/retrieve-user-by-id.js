import context from './context'

const retrieveUserById = (token, id) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    return (async () => {
        const res = await fetch(
            `${context.API_URL}/userbyid/?q=${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        const { status } = res

        if (status === 401 || status === 404) {
            const { error } = await res.json()

            throw new Error(error)
        } else if (status >= 400 && status < 500) {
            throw new Error('client error')
        } else if (status >= 500) {
            throw new Error('server error')
        } else if (status === 200) {
            const user = await res.json()
            
            return user.name
        }
    })()
}

export default retrieveUserById