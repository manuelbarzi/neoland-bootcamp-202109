// ----- showing details when clicking on search results items -----
/**
 * Retrieves the details of the selected item.
 * 
 * @param {string} id The id of the item being retrieved.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function retrieveVehicle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        // Falta incluir manejo de errores
        if (status === 200) {
            const vehicle = JSON.parse(responseText)

            if (!vehicle) return callback(new Error('no vehicle found with id ' + id))

            callback(null, vehicle)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()
}

export default retrieveVehicle