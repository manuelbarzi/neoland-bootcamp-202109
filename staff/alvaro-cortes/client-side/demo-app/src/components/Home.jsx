import { Component } from 'react'
import './Home.css'
import logger from '../logger'
import { searchVehicles } from '../logic'
import { retrieveVehicle } from '../logic'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'

class Home extends Component {
    constructor(props) {
        logger.info("Home -> constructor")
        
        super(props)

        this.state = { vehicles: [], vehicle: null, }
    }

    onSearch = query => {
        //En caso de ya tener resultados impresos de la busqueda anterior, se reemplazaran por los de la nueva busqueda 
        const { props: { hideSpinner, showModal, showSpinner } } = this
        
        this.setState({ vehicle: null })

        showSpinner()

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {

                    hideSpinner()

                    showModal("Error", error.message)

                    return
                }

                hideSpinner()
                
                this.setState({ vehicles })
            })
        } catch ({ message}) {

            showModal("Error", message)

            hideSpinner()

            this.setState({ vehicles: [] })
        }
    }

    onItem = vehicleId => {

        const { props: { showModal, showSpinner, hideSpinner } } = this

        showSpinner()

        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {
                if (error) { 

                    showModal("Error", error.message)
                }
                hideSpinner()

                this.setState({ vehicle })
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()
        }
    }
    
    render() {

            const { state: { vehicles, vehicle}, props: { name, onProfile, signOut}, onItem } = this
        
        return <>
            {!vehicles && <Search onSearch={this.onSearch}/>}

            {vehicles && <Search onSearch={this.onSearch}/>}

            <div className="welcome container container--vertical">
                <h2> Bienvenido a tu página de inicio <span className="name"> {name} </span></h2>
                <div className="container">
                    <button type="button" className="button button--red" onClick={() => onProfile()}>Perfil</button>
                    <button type="button" className="button button--signout" onClick={() => signOut()}>Cerrar Sesión</button>
                </div>
            </div>

            {!vehicle && <Results items={vehicles} onItem={onItem} />}

            {vehicle && <Detail item={vehicle}
                backResultList={() => this.setState({ vehicle: null })} />}
        </>
    }
}

export default Home
