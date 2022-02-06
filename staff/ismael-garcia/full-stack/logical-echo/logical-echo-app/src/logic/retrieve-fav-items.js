import { validateCallback, validateToken } from './helpers/validators'

function retrieveFavItems(token, callback) {
    validateToken(token)
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

            if (favs.length) {
                let count = 0
                const items = []

                favs.forEach((id, index) => {
                    const xhr2 = new XMLHttpRequest()

                    xhr2.onload = () => {
                        const { status, responseText } = xhr2

                        if (status === 200) {
                            const item = JSON.parse(responseText)

                            if (!item) return callback(new Error(`no item found with id ${id}`))

                            count++

                            items[index] = item

                            if (count === favs.length) {
                                items.forEach(item => item.isFav = true)

                                callback(null, items)
                            }
                        }
                    }

                    xhr2.open('GET', `https://localhost/items/${id}`)

                    xhr2.send()
                })
            } else callback(null, [])
        }
    }

    xhr.open('GET', 'https://localhost/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveFavItems