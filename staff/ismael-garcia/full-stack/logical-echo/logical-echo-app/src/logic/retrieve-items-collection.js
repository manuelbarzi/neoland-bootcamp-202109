import { validateStore, validateCallback } from "./helpers/validators"

/**
 * Retrieves the details of the selected item.
 * 
 * @param {string} store The store from which all the items will be retrieved.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function retrieveItemsCollection(token, store, callback) {
    validateStore(store)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = responseText
            
            const user = JSON.parse(response)

            const { favs = [] } = user

            const xhr2 = new XMLHttpRequest()

            xhr2.onload = () => {
                const { status, responseText } = xhr2

                if (status === 200) {
                    const items = JSON.parse(responseText)

                    if (!items) return callback(new Error(`no items found with store ${store}`))

                    items.forEach(item => item.isFav = favs.includes(item.id))

                    callback(null, items)
                }
            }

            xhr2.open('GET', `https://localhost/items/${store}`)

            xhr2.send() 
        }
    }

    xhr.open('GET', 'https://localhost/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveItemsCollection