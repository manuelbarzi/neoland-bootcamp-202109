/**
 * Getting all information of the id vehicle
 * 
 * @param {string} id The id to get all the information of the vehicle
 * @param {function} callback The callback to manage the response
 * 
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

 function retrieveVehicle(id, callback) {
    if (typeof id !== "string") throw new Error(id + " is not a string")

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        //const status = xhr.status
        const { status, responseText } = xhr

        if (status === 200) {
            const vehicles = JSON.parse(responseText)

            if (!vehicles) return callback(new Error('No vehicle found with id ' + id))

            callback(null, vehicles)

        }
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()
}

export default retrieveVehicle