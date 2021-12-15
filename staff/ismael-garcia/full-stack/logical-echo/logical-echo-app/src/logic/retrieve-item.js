import { validateItemId, validateCallback } from "./helpers/validators"

/**
 * Retrieves the details of the selected item.
 * 
 * @param {string} id The id of the item being retrieved.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function retrieveItem(id, callback) {
    validateItemId(id)
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
                    const item = JSON.parse(responseText)

                    if (!item) return callback(new Error(`no item found with id ${id}`))

                    item.isFav = favs.includes(item.id)

                    callback(null, item)
                }
            }

            xhr2.open('GET', `https://localhost/items/${id}`)

            xhr2.send() 
        }
    }

    xhr.open('GET', 'https://localhost/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`) // esto por qué?

    xhr.send()
}

export default retrieveItem