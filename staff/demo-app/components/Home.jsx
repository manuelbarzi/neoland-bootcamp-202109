class Home extends React.Component {
    constructor(props) {
        logger.info("Home -> constructor")
        
        super(props)

        this.state = { vehicles: [], vehicle: null, }
    }

    onSearch = query => {
        //En caso de ya tener resultados impresos de la busqueda anterior, se reemplazaran por los de la nueva busqueda 
        this.setState({ vehicle: null })

        this.props.showSpinner()

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {
                    var error = error.message

                    this.props.hideSpinner()

                    this.props.showModal("Error", error)

                    return
                }

                this.props.hideSpinner()
                
                this.setState({ vehicles })
            })
        } catch (error) {
            var errorM = error.message

            this.props.showModal("Error", errorM)

            this.props.hideSpinner()

            this.setState({ vehicles: [] })
        }
    }

    onItem = vehicleId => {

        this.props.showSpinner()

        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {
                if (error) { 
                    var error = error.message

                    this.props.showModal("Error", error)
                }
                this.props.hideSpinner()

                this.setState({ vehicle })
            })
        } catch (error) {
            var errorM = error.message

            this.props.showModal("Error", errorM)

            this.props.hideSpinner()
        }
    }
    
    render() {
        return <>
            {!this.state.vehicles && <Search onSearch={this.onSearch}/>}

            {this.state.vehicles && <Search onSearch={this.onSearch}/>}

            <div className="welcome container container--vertical">
                <h2> Bienvenido a tu página de inicio <span className="name"> {this.props.name} </span></h2>
                <div className="container">
                    <button type="button" className="button button--red" onClick={() => this.props.onProfile()}>Perfil</button>
                    <button type="button" className="button button--signout" onClick={() => this.props.signOut()}>Cerrar Sesión</button>
                </div>
            </div>

            {!this.state.vehicle && <Results items={this.state.vehicles} onItem={this.onItem} />}

            {this.state.vehicle && <Detail item={this.state.vehicle}
                backResultList={() => this.setState({ vehicle: null })} />}
        </>
    }
}
