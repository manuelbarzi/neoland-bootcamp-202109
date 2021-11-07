/**
 * Function to toggle on favorites a vehicle.
 * 
 * @param {string} token The token to authenticate the user.
 * @param {string} id The id vehicle to bo toggled.
 * @param {function} callback The function to manage the errors.
 */

function toggleFavoriteVehicle(token, id, callback) {
    if (typeof token !== "string") throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof id !== "string") throw new TypeError(`${id} is not a string`)
    if (!id.trim().lenght) throw new Error("id is empty or blank.")

    if (typeof callback !== "function") throw new TypeError(`${callback} is not a function`)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = JSON.parse(responseText)

            const user = JSON.parse(response)

            const { favs = [] } = user

            const index = favs.indexOf(id)

            if (index < 0)
                favs.push(id)
            else
                favs.splice(index, 1)

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const { status, responseText } = xhr2

                if (status === 400 || status === 401) {
                    const response = JSON.parse(responseText)

                    const message = response.error

                    callback(new Error(message))
                } else if (status === 204) {
                    callback(null)
                }
            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)

            xhr2.setRequestHeader('Content-Type', 'application/json')

            const body = { favs }

            xhr2.send(JSON.stringify(body))
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default toggleFavoriteVehicle