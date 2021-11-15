function retrieveVehicle(token, id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const { status, responseText } = xhr


        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)
            const message = response.error
            callback(new Error(message))

        } else if (status === 200) {
            const user = JSON.parse(responseText)
            
            const { fav = [] } = user
            
       
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()

    // var xhr = new XMLHttpRequest

    // xhr.onload = function () {
    //     var status = xhr.status

    //     if (status === 200) {
    //         var vehicle = JSON.parse(xhr.responseText)

    //         callback(null, vehicle)
    //     }
    // }

    // xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    // xhr.send()
}}
export default retrieveVehicle