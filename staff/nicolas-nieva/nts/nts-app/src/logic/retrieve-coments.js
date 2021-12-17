function retrieveComment(token, id, callback) {
    if (typeof token !== "string") throw new TypeError(token + " is not a string")
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        //const status = xhr.status
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = responseText

            const user = JSON.parse(response)

            const { comments = [] } = user

            if (comments.length) {
                let count = 0

                comments.forEach((text) => {

                    if (!comments) return callback(new Error(`no comment found with id ${id}`))
                    if (text.id === id) {
                        count++

                       const texts = text.text

                        if (count === 1) {

                            return callback(null, texts)
                        }
                    }
                })
            }
        } else callback(null, [])
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

export default retrieveComment 