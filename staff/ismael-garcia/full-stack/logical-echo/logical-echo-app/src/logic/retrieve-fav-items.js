import context from './context'
import { validateToken } from './helpers/validators'
/**
 * Retrieves items that the user has stored in his favs list.
 * 
 * @param {string} token The token received from the API when the user is logged in the application.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function retrieveFavItems(token) {
    validateToken(token)

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

            if (favs.length) {
                let count = 0 
                let items = []

                favs.forEach(async (item_id, index) => {
                    const res2 = await fetch(`${context.API_URL}/items/favs`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    })
        
                    const { status } = res2 
        
                    if (status === 200) {
                        const item = await res2.json()

                        if (!item) return new Error(`no item found with id ${item_id}`)

                        count++

                        items[index] = item

                        if (count === favs.length) {
                            items.forEach(item => item.isFav = true)

                            return items
                        }
                    } else {
                        const { error } = await res2.json()
            
                        throw new Error(error)
                    }
                })
            }

        } else throw new Error('Unknown error')
    })()
}

export default retrieveFavItems

// import { validateCallback, validateToken } from './helpers/validators'

// function retrieveFavItems(token, callback) {
//     validateToken(token)
//     validateCallback(callback)

//     const xhr = new XMLHttpRequest()

//     xhr.onload = () => {
//         const { status, responseText } = xhr

//         if (status === 401 || status === 404) {
//             const response = JSON.parse(responseText)

//             const message = response.error

//             callback(new Error(message))
//         } else if (status === 200) {
//             const response = responseText
            
//             const user = JSON.parse(response)

//             const { favs = [] } = user

//             if (favs.length) {
//                 let count = 0
//                 const items = []

//                 favs.forEach((id, index) => {
//                     const xhr2 = new XMLHttpRequest()

//                     xhr2.onload = () => {
//                         const { status, responseText } = xhr2

//                         if (status === 200) {
//                             const item = JSON.parse(responseText)

//                             if (!item) return callback(new Error(`no item found with id ${id}`))

//                             count++

//                             items[index] = item

//                             if (count === favs.length) {
//                                 items.forEach(item => item.isFav = true)

//                                 callback(null, items)
//                             }
//                         }
//                     }

//                     xhr2.open('GET', `https://localhost/items/${id}`)

//                     xhr2.send()
//                 })
//             } else callback(null, [])
//         }
//     }

//     xhr.open('GET', 'https://localhost/users')

//     xhr.setRequestHeader('Authorization', `Bearer ${token}`)

//     xhr.send()
// }

// export default retrieveFavItems