import context from './context'

/**
 * Toggle Fav Game
 * 
 * @param {string} userId The user id
 * @param {string} gameId The id that will be toggle
 */

const togglePlayingGame = (token, gameId) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof gameId !== 'string') throw new TypeError(`${gameId} is not a string`)

    return (async () => {
        const res = await fetch(`http://localhost:8000/api/users/playing`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ gameId: gameId })
        })

        const { status } = res

        if (status === 201)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default togglePlayingGame