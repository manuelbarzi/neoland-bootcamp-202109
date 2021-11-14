function retrieveVehiclesCart(token, callback) {
    

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = responseText

            const user = JSON.parse(response)

            const { cart = [] } = user

            if (cart.length) {
                let count = 0
                const vehicles = []

                cart.forEach((item, index) => {//forEach ejectua la funcion indicada una vez por cada elemento (item,index)
                    const { id, qty } = item

                    const xhr2 = new XMLHttpRequest

                    xhr2.onload = () => {
                        const { status, responseText } = xhr2

                        if (status === 200) {
                            const vehicle = JSON.parse(responseText)

                            if (!vehicle) return callback(new Error(`no vehicle found with id ${id}`))

                            vehicle.qty = qty

                            vehicles[index] = vehicle

                            count++

                            if (count === cart.length)
                                callback(null, vehicles)
                        }
                    }
                    xhr2.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)

                    xhr2.send()
                })
            } else callback(null, [])
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveVehiclesCart