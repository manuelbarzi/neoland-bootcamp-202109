import context from './context'
import { validateItemId, validateToken } from "./helpers/validators"

/**
 * Retrieves the details of the selected item.
 * 
 * @param {string} id The id of the item being retrieved.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function retrieveItem(token, id) {
    if (token)
        validateToken(token)

    validateItemId(id)

    return (async () => {
        const res = await fetch(`${context.API_URL}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const { status } = res 

        if (status === 401 || status === 404) {
            const { error } = await res.json()
    
            throw new Error(error)    
        } else if (status === 200) {
            const user = await res.json()

            const { favs = [] } = user 

            const res2 = await fetch(`http://localhost:8000/api/items/${id}`, {
                method: 'GET'
            })

            const { status } = res2 

            if (status === 200) {
                const item = await res2.json()

                item.isFav = favs.includes(item.id)               

                return item 
            }
        } else throw new Error('Unknown error')
    })()
 }

export default retrieveItem