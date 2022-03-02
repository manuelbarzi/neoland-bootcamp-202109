import context from './context'

/**
 * Retrieve all games in data base.
 */

const retrieveAllGames = (query) => {
    return (async () => {
        const res = await fetch(`http://localhost:8000/api/games/all`, {
            method: 'GET'
        })

        const { status } = res

        if (status === 200)
            return await res.json()
        else if (status === 409 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default retrieveAllGames