function retrieveVehicle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicles = JSON.parse(xhr.responseText)

            if (!vehicles) return callback(new Error('no vehicle found with id ' + id))

            callback(null, vehicles)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()
}


export default retrieveVehicle