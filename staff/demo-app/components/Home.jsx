class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = { vehicles: [], vehicle: null }
    }

    render() {
        return <>
            {!this.state.vehicles && <Search onSearch={query => {
                try {
                    searchVehicles(query, (error, vehicles) => {
                        alert(error.message)
                        this.setState({ vehicles })
                    })
                } catch (error) {
                    if (error) return alert(error.message)
                    this.setState({ vehicles: [] })
                }
            }} />}

            {this.state.vehicles && <Search onSearch={query => {
                //En caso de ya tener resultados impresos de la busqueda anterior, se reemplazaran por los de la nueva busqueda 

                this.setState({ vehicle: null })
                try {
                    searchVehicles(query, (error, vehicles) => {
                        if (error) return alert(error.message)
                        //injectableModal("template-modal", "Error", error.message);

                        this.setState({ vehicles })
                    })
                } catch (error) {
                    alert(error.message)
                    this.setState({ vehicles: [] })
                }
            }} />}

            <div className="welcome container container--vertical">
                <h2> Bienvenido a tu página de inicio <span className="name"></span></h2>
                <div className="container">
                    <button type="button" className="button button--red" onClick={() => this.props.onProfile()}>Perfil</button>
                    <button type="button" className="button button--signout" onClick={() => this.props.signOut()}>Cerrar Sesión</button>
                </div>
            </div>

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

            {this.state.vehicle && <Detail item={this.state.vehicle}
                backResultList={() => this.setState({ vehicle: null })} />}
        </>
    }
}
