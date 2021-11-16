function retrieveFavVehicles( token, callback ) {
    const xhr = new XMLHttpRequest
    xhr.onload = function () {

        const { status } = xhr
        if ( status === 401 || status === 404 ) {
            const response = JSON.parse( xhr.responseText )

            callback( new Error( response.error ) )
        }
        if ( status === 200 ) {
            const user = JSON.parse( xhr.responseText )

            const { favs = [] } = user

            if ( favs.length ) {
                let count = 0

                const vehicles = []
                favs.forEach( (id, index) => {
                    const xhr2 = new XMLHttpRequest
                    xhr2.onload = function () {
                        const {status, responseText} = xhr2
                        if(status === 200 ){
                            const vehicle = JSON.parse(responseText)

                            if (!vehicle) {
                                return callback(new Error('no vehicle found with id:' + id))
                            }
                           
                            count++

                            vehicles[index] = vehicle

                            if (count === favs.length) {
                                vehicles.forEach(vehicle =>
                                    vehicle.isFav = true)
                                callback(null, vehicles)
                            }
                        }

                    }
                    xhr2.open( 'GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id )

                    xhr2.send()

                } );
            }
        }
    }
    xhr.open( 'GET', 'https://b00tc4mp.herokuapp.com/api/v2/users' )
    xhr.setRequestHeader( 'Authorization', 'Bearer ' + token )
    xhr.send()
}
export default retrieveFavVehicles