import context from './context'

/**
 * Retrieve games favs of the user
 * 
 * @param {string} id The id that will be toggle
 */

const retrieveFavGames = (token) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    return (async () => {
        const res = await fetch(`http://localhost:8000/api/users/favs`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const { status } = res

        if (status === 200)
            return await res.json()
        else if (status === 401 || status === 404) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default retrieveFavGames