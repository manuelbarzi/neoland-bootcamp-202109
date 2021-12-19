import context from './context'
import { validateStore, validateToken } from "./helpers/validators"

/**
 * Retrieves the details of the selected item.
 * 
 * @param {string} store The store from which all the items will be retrieved.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function retrieveItemsCollection(token, store) {
    if (token)
        validateToken(token)

    validateStore(store)

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

            const res2 = await fetch(`http://localhost:8000/api/items/store?q=${store}`, {
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

export default retrieveItemsCollection