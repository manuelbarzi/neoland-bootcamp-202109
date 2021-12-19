import context from './context'
const { validateToken, validateQuery } = require('./helpers/validators')
/**
 * Searches for items that meet the query criteria.
 * 
 * @param {string} query The search criteria entered by the user in the search form.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function searchItems(token, query) {
    if (token)
        validateToken(token)
        
    validateQuery(query)

    return (async () => {
        const res = await fetch(`${context.API_URL}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const { status } = res 

        if (status === 401 || status === 404) {
            const { error } = res.json()

            throw new Error(error)
        } else if (status === 200) {
            const user = await res.json()

            const { favs = [] } = user 

            const res2 = await fetch(`http://localhost:8000/api/items?q=${query}`, {
                method: 'GET'
            })

            const { status } = res2 

            if (status === 200) {
                const items = await res2.json()

                items.forEach(item => {
                    item.isFav = favs.includes(item.id)
                })

                return items 
            }
        } else throw new Error('Unknown error')
    })()
}

export default searchItems