// - - - - - using search form - - - - -
/**
 * Searches for items that meet the query criteria.
 * 
 * @param {string} query The search criteria entered by the user in the search form.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
 function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        // Falta incluir manejo de errores
        if (status === 200) {
            const vehicles = JSON.parse(responseText)

            callback(null, vehicles)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    xhr.send()
}

export default searchVehicles