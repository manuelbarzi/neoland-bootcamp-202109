import context from './context'

/**
 * Signs up a user in the application.
 * 
 * @param {string} query The query wath will be search
 */

const searchGames = (query) => {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')
    if (!query.trim().length) throw new Error('query is empty or blank')
    if (query.trim() !== query) throw new Error('blank spaces around query')

    return (async () => {
        const res = await fetch(`http://localhost:8000/api/games?q=${query}`, {
            method: 'GET'
        })

        const { status } = res

        if (status === 200)
            return await res.json()
        else if (status === 404 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default searchGames