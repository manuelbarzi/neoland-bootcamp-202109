/**
 * Searching vehicles by query
 * 
 * @param {string} query The query to be searching on the API
 * @param {function} callback The callback to manage the response
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

 function searchVehicles(query, callback) {
    if (typeof query !== "string") throw new TypeError(query + " is not a string")
    if (!query.trim().length) throw new Error("Query is empty or blank")

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        //const status = xhr.status
        const { status, responseText } = xhr

        if (status === 200) {
            const vehicles = JSON.parse(responseText)

            if (vehicles.length === 0) return callback(new Error('No vehicle found with ' + query))

            callback(null, vehicles)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    xhr.send()
}

export default searchVehicles