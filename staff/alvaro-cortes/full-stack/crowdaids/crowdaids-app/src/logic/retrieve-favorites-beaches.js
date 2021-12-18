import context from './context'
const { validateId } = require('crowdaids-logic/helpers/validators')

function retrieveFavVehicles(token, callback) {
    validateId(token)

    /*return (async () => {
        const res = await fetch(`${context.API_URL}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const { status } = res

        if (status === 404 ||status === 401) {
            const { error } = res.json()

            throw new Error(error)
        } else if (status === 200) {
            const user = await res.json()

            const { favorites } = user

            if (favorites.length) {
                let count = 0
                const beaches = []

                
            }
        }
    })()*/

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr
        
        if (status === 404 || status === 401) {
            const response = JSON.parse(responseText)

            const message = response.Error
            callback(new Error(message))
        } else if ( status === 200) {
            const user = JSON.parse(responseText)

            const { favs = [] } = user

            if (favs.length) {
                let count = 0
                const vehicles = []

                favs.forEach((id, index) => {
                    const xhr2 = new XMLHttpRequest

                    xhr2.onload = () => {
                        const { status, responseText } = xhr2

                        if (status === 200) {
                            const vehicle = JSON.parse(responseText)

                            if (!vehicle) return callback(new Error(`no vehicle found with id ${id}`))
                        
                            count++

                            vehicles[index] = vehicle

                            if (count === favs.length) {
                                vehicles.forEach(vehicle => vehicle.isFav = true)
                                
                                callback(null, vehicles)
                            }
                        }
                    }

                    xhr2.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
                
                    xhr2.send()
                })
            } else callback(null, [])
        }
    }

    xhr.open('GET', `${process.env.REACT_APP_API_URL}/users`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveFavVehicles