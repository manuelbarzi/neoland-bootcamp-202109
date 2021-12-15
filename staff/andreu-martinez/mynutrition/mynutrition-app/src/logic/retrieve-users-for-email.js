import context from './context'

function retrieveUsersForEmail(token, callback) {

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = responseText

            const users = JSON.parse(response)

            callback(null, users)
        }
    }

    xhr.open('GET', `${context.API_URL}/listusers`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveUsersForEmail