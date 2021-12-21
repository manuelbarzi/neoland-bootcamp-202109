import context from './context'

/**
 * Toggle Fav Game
 * 
 * @param {string} id The id that will be toggle
 */

const toggleFavGame = (id) => {
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)

    return (async () => {
        const res = await fetch(`http://localhost:8000/api/users/favs`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ gameId: id })
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

export default toggleFavGame