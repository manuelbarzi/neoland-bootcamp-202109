import context from './context'

/**
 * Retrieve the user data.
 * 
 * @param {string} token The full name of the user to be registered.
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