function searchVehicles( token, query, callback ) {

    if ( typeof query !== 'string' ) throw new TypeError( query + ' is not a string' )
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


            var xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                var status = xhr2.status

                if ( status === 200 ) {
                    var vehicles = JSON.parse( xhr2.responseText )
                    vehicles.forEach(vehicle => {
                        vehicle.isFav = favs.includes(vehicle.id)
                    });

                    callback( null, vehicles )
                }
            }

            xhr2.open( 'GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query )

            xhr2.send()
        }


    }

    xhr.open( 'GET', 'https://b00tc4mp.herokuapp.com/api/v2/users' )
    xhr.setRequestHeader( 'Authorization', 'Bearer ' + token )
    xhr.send()

}
export default searchVehicles