class Home extends React.Component {
    constructor() {
        super()

        this.state = { vehicles: [], vehicle: null }
    }

    render() {
        return <div id="home" className="home container container--vertical container--gapped">
            <h1>Hola, <span className="name"></span>. ¡Bienvenido a nuestro sitio!</h1>

            <div>
                <button type="button" className="button button--medium button--dark">Profile</button>
                <button type="button" className="button button--medium">Log out</button>
            </div>

            <Search onSearch={query => {
                try {
                    searchVehicles(query, (error, vehicles) => {
                        if (error) return alert(error.message)

                        //this.setState({ vehicles: vehicles })
                        this.setState({ vehicles })
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />

            {!this.state.vehicle && <Results items={this.state.vehicles} onItem={vehicleId => {
                try {
                    retrieveVehicle(vehicleId, (error, vehicle) => {
                        if (error) return alert(error.message)

                        this.setState({ vehicle })
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />}

            {this.state.vehicle && <Detail item={this.state.vehicle} />}
        </div>
    }
}