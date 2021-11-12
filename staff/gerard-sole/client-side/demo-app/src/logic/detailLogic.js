function retrieveVehicle( token, id, callback ) {
    if ( typeof id !== 'string' ) throw new TypeError( id + ' is not a string' )
    const xhr = new XMLHttpRequest
    xhr.onload = function () {
        debugger
        const { status } = xhr
        if ( status === 401 || status === 404 ) {
            const response = JSON.parse( xhr.responseText )

            callback( new Error( response.error ) )
        }
        if ( status === 200 ) {
            const user = JSON.parse( xhr.responseText )

            const { favs = [] } = user

            var xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                var status = xhr2.status

                if ( status === 200 ) {
                    var vehicle = JSON.parse( xhr2.responseText )

                    if ( !vehicle ) return callback( new Error( 'no vehicle found with id ' + id ) )

                    vehicle.isFav = favs.includes( vehicle.id )
                    callback( null, vehicle )
                }
            }

            xhr2.open( 'GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id )

            xhr2.send()
        }
    }
        xhr.open( 'GET', 'https://b00tc4mp.herokuapp.com/api/v2/users' )
        xhr.setRequestHeader( 'Authorization', 'Bearer ' + token )
        xhr.send()



    
}

export default retrieveVehicle