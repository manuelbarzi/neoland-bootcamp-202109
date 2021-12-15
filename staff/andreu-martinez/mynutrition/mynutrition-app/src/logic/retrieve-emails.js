import context from './context'

function retrieveEmails(token, callback) {

    const xhr = new XMLHttpRequest

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

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const { status, responseText } = xhr2

                if (status === 200) {
                    const vehicle = JSON.parse(responseText)

                    if (!vehicle) return callback(new Error(`no vehicle found with id ${id}`))

                    vehicle.isFav = favs.includes(vehicle.id)

                    callback(null, vehicle)
                }
            }

            const res = await fetch(`${context.API_URL}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
    

            xhr2.open('GET', `${context.API_URL}/emails`)

            xhr2.send()
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveEmails