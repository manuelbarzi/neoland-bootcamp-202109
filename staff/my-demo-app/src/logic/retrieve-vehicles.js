function retrieveVehicle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicle = JSON.parse(xhr.responseText)

            callback(null, vehicle)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()
}
export default retrieveVehicle