import context from './context'

/**
 * Retrieve one game detail
 * 
 * @param {string} id The id of the game that will be retrieve
 */

function retrieveGameDetail(id) {
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)

    return (async () => {
        const res = await fetch(`http://localhost:8000/api/games/${id}`)

        const { status } = res

        if (status === 200) {
            return await res.json()
        } else if (status === 401 || status === 404) {
            const { error } = res.json()

            throw new Error(error)
        } else throw new Error('unknow error')
    })()
}

export default retrieveGameDetail