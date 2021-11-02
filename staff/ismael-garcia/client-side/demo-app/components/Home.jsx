class Home extends React.Component {
    constructor() {
        logger.info('Home -> constructor')

        super()

        this.state = { vehicles: [], vehicle: null }
    }

    onSearch = query => {
        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) return alert(error.message)
    
                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }      

    onItem = vehicleId => {
        try {
            retrieveVehicle (vehicleId, (error, vehicle) => {
                if (error) return alert(error.message)

                this.setState({ vehicle })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.info('Home -> render')

        return <div id="home" className="home container container--vertical container--gapped">
            <h1>Hola, <span className="name">{this.props.name? this.props.name : 'World'}</span>. ¡Bienvenido a nuestro sitio!</h1>

            <div>
                <button type="button" className="button button--medium button--dark">Profile</button>
                <button type="button" className="button button--medium" onClick={this.props.onSignOut}>Sign out</button>
            </div>

            <Search onSearch={this.onSearch} />

            {!this.state.vehicle && <Results items={this.state.vehicles} onItem={this.onItem} />}

            {this.state.vehicle && <Detail item={this.state.vehicle} />}
        </div>
    }
}