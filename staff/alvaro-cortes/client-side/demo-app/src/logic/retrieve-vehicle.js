/**
 * Getting all information of the id vehicle
 * 
 * @param {string} id The id to get all the information of the vehicle
 * @param {function} callback The callback to manage the response
 * 
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

 function retrieveVehicle(token, id, callback) {
    if (typeof id !== "string") throw new Error(`${id} is not a string`)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        //const status = xhr.status
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(this.responseText)

            const message = response.error

            callback(new Error(message))

        } else if (status === 200) {
            const response = responseText

            const user = JSON.parse(response)

            const { favs = [] } = user

            const isFav = favs.includes(id)

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const { status, responseText } = xhr2

                if (status === 200) {
                    const vehicle = JSON.parse(responseText)
        
                    if (!vehicle) return callback(new Error(`No vehicle found with id ${id}`))
        
                    vehicle.isFav = isFav

                    callback(null, vehicle)
                }

            }

            xhr2.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
        
            xhr2.send()
        }
        
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveVehicle