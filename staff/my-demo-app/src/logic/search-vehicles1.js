function searchVehicles(token, query, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        const {status, responseText} = xhr
       

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)
            const message = response.error
            callback(new Error(message))

        } else if (status === 200) {
            const user = JSON.parse(responseText)
            callback(null, user)
        }
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()






    // if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    // var xhr = new XMLHttpRequest

    // xhr.onload = function () {
    //     const {status, responseText} = xhr

    //     if (status === 200) {
    //         var vehicles = JSON.parse(responseText)

    //         callback(null, vehicles)
    //     }
    // }

    // xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    // xhr.send()
}

export default searchVehicles