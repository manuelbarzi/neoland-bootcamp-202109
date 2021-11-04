import { Component } from 'react'
import logger from '../logger'
import { searchVehicles } from '../logic'
import { retrieveVehicle } from '../logic'
import { updateUserPassword } from '../logic'
import { unregisterUser } from '../logic'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Profile from './Profile'

class Home extends Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = { 
            vehicles: [], 
            vehicle: null,
            view: 'search' 
        }
    }

    search = query => {
        // const onFlowStart = this.props.onFlowStart
        // const onFlowEnd = this.props.onFlowEnd
        const { props: {onFlowStart, onFlowEnd, onModal } } = this

        onFlowStart()

        this.setState({ vehicle: null, vehicles: [] })

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) { 
                    onFlowEnd()

                    onModal(error.message)

                    return
                }
    
                this.setState({ vehicles })

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }      

    goToItem = vehicleId => {
        const { props: { onFlowStart, onFlowEnd, onModal } } = this
        
        onFlowStart()

        try {
            retrieveVehicle (vehicleId, (error, vehicle) => {
                if (error) { 
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                this.setState({ vehicle })

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    clearVehicle = () => this.setState({ vehicle: null })

    goToProfile = () => this.setState({ view: 'profile' })

    goToSearch = () => this.setState({ view: 'search' })

    updatePassword = (oldPassword, password) => {
        const { props: { onFlowStart, onFlowEnd, onModal } } = this

        onFlowStart()
        
        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    unregister = password => {
        const { props: { onFlowStart, onFlowEnd, onModal, onSignOut } } = this

        onFlowStart()

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    onFlowEnd()

                    onModal()

                    return
                }

                onFlowEnd()

                onSignOut()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    render() {
        logger.debug('Home -> render')

        const { state: { view, vehicle, vehicles }, props: { name, onSignOut }, goToProfile, goToItem, clearVehicle, updatePassword, goToSearch, search, unregister } = this

        return <div id="home" className="home container container--vertical container--gapped">
            <h1>Hola, <span className="name">{name? name : 'World'}</span>. ¡Bienvenido a nuestro sitio!</h1>

            <div>
                <button type="button" className="button button--medium button--dark" onClick={goToProfile}>Profile</button>
                <button type="button" className="button button--medium" onClick={onSignOut}>Sign out</button>
            </div>

            {view === 'search' && <>
            <Search onSearch={search} />
            
            {!vehicle && <Results items={vehicles} onItem={goToItem} />}

            {vehicle && <Detail item={vehicle} onBack={clearVehicle} />}
            </>
            }

            {view === 'profile' && <Profile onBack={goToSearch} onPasswordUpdate={updatePassword} onUnregister={unregister} />}
        </div>
    }
}

export default Home