import { useState } from 'react'
import logger from '../utils/logger'
import { 
    searchVehicles, 
    retrieveVehicle, 
    updateUserPassword, 
    unregisterUser,
    toggleFavVehicle,
    retrieveFavVehicles 
} from '../logic'
import Search from './Search'
import Results from './Results/Results'
import Detail from './Detail/Detail'
import Profile from './Profile'
import Favs from './Favs'

function Home({ name, onFlowStart, onFlowEnd, onSignOut, onModal }) {
    logger.debug('Home -> render')

    const [vehicles, setVehicles] = useState([])
    const [vehicle, setVehicle] = useState(null)
    const [view, setView] = useState('search')
    const [favs, setFavs] = useState([])
    const [query, setQuery] = useState(null)

    const search = query => {
        onFlowStart()

        setVehicle(null)
        setVehicles([])
        setQuery(query)
        
        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) { 
                    onFlowEnd()

                    onModal(error.message)

                    return
                }
    
                setVehicles(vehicles)

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }      

    const goToItem = vehicleId => {
        onFlowStart()

        try {
            retrieveVehicle (sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) { 
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicle(vehicle)
                setView('search')

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const clearVehicle = () => setVehicle(null)

    const goToProfile = () => setView('profile')

    const goToSearch = () => setView('search')

    const updatePassword = (oldPassword, password) => {
        onFlowStart()
        
        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                onFlowEnd()

                onModal('Password updated', 'success')
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const unregister = password => {
        onFlowStart()

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    onFlowEnd()

                    onModal()

                    return
                }

                logger.info('User unregistered')

                onFlowEnd()

                onModal('User unregistered', 'success')

                onSignOut()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                if (vehicle && vehicle.id === id)
                    setVehicle({ ...vehicle, isFav: !vehicle.isFav })

                if (vehicles.length)
                    setVehicles(vehicles.map(vehicle => {
                        if (vehicle.id === id) {
                            return { ...vehicle, isFav: !vehicle.isFav}
                        }

                        return vehicle
                    }))
                
                if (favs.length)
                    setFavs(favs.filter(vehicle => vehicle.id !== id))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const goToFavs = () => {
        onFlowStart()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                onFlowEnd()
                setFavs(favs)
                setView('favs')
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return <div id="home" className="home container container--vertical container--gapped">
            <h1>Hola, <span className="name">{name? name : 'World'}</span>. ¡Bienvenido a nuestro sitio!</h1>

            <div>
                <button type="button" className="button button--medium button--dark" onClick={goToProfile}>Profile</button>
                <button type="button" className="button button--medium button--dark" onClick={goToFavs}>Favs</button>
                <button type="button" className="button button--medium" onClick={onSignOut}>Sign out</button>
            </div>

            {view === 'search' && <>
                <Search onSearch={search} query={query} />

                {!vehicle && <Results items={vehicles} onItem={goToItem} onToggleFav={toggleFav} />}

                {vehicle && <Detail item={vehicle} onBack={clearVehicle} onToggleFav={toggleFav} />}

                </>}

            {view === 'profile' && <Profile onBack={goToSearch} onPasswordUpdate={updatePassword} onUnregister={unregister} />}

            {view === 'favs' && <Favs items={favs} onBack={goToSearch} onItem={goToItem} onToggleFav={toggleFav} />}
        </div>
}

export default Home


// VERSION WITH CLASS COMPONENTS:
// import { Component } from 'react'
// import logger from '../../utils/logger'
// import { 
//     searchVehicles, 
//     retrieveVehicle, 
//     updateUserPassword, 
//     unregisterUser,
//     toggleFavVehicle,
//     retrieveFavVehicles 
// } from '../../logic'
// import Search from '../Search'
// import Results from '../Results/Results'
// import Detail from '../Detail/Detail'
// import Profile from '../Profile'
// import Favs from '../Favs'
// import './Home.css'

// class Home extends Component {
//     constructor() {
//         logger.debug('Home -> constructor')

//         super()

//         this.state = { 
//             vehicles: [], 
//             vehicle: null,
//             view: 'search',
//             favs: [],
//             query: null 
//         }
//     }

//     search = query => {
//         // const onFlowStart = this.props.onFlowStart
//         // const onFlowEnd = this.props.onFlowEnd
//         const { props: {onFlowStart, onFlowEnd, onModal } } = this

//         onFlowStart()

//         this.setState({ vehicle: null, vehicles: [], query })

//         try {
//             searchVehicles(query, (error, vehicles) => {
//                 if (error) { 
//                     onFlowEnd()

//                     onModal(error.message)

//                     return
//                 }
    
//                 this.setState({ vehicles })

//                 onFlowEnd()
//             })
//         } catch ({ message }) {
//             onFlowEnd()

//             onModal(message, 'warn')
//         }
//     }      

//     goToItem = vehicleId => {
//         const { props: { onFlowStart, onFlowEnd, onModal } } = this
        
//         onFlowStart()

//         try {
//             retrieveVehicle (sessionStorage.token, vehicleId, (error, vehicle) => {
//                 if (error) { 
//                     onFlowEnd()

//                     onModal(error.message)

//                     return
//                 }

//                 this.setState({ vehicle })

//                 onFlowEnd()
//             })
//         } catch ({ message }) {
//             onFlowEnd()

//             onModal(message, 'warn')
//         }
//     }

//     clearVehicle = () => this.setState({ vehicle: null })

//     goToProfile = () => this.setState({ view: 'profile' })

//     goToSearch = () => this.setState({ view: 'search' })

//     updatePassword = (oldPassword, password) => {
//         const { props: { onFlowStart, onFlowEnd, onModal } } = this

//         onFlowStart()
        
//         try {
//             updateUserPassword(sessionStorage.token, oldPassword, password, error => {
//                 if (error) {
//                     onFlowEnd()

//                     onModal(error.message)

//                     return
//                 }

//                 onFlowEnd()

//                 onModal('Password updated', 'success')
//             })
//         } catch ({ message }) {
//             onFlowEnd()

//             onModal(message, 'warn')
//         }
//     }

//     unregister = password => {
//         const { props: { onFlowStart, onFlowEnd, onModal, onSignOut } } = this

//         onFlowStart()

//         try {
//             unregisterUser(sessionStorage.token, password, error => {
//                 if (error) {
//                     onFlowEnd()

//                     onModal()

//                     return
//                 }

//                 logger.info('User unregistered')

//                 onFlowEnd()

//                 onModal('User unregistered', 'success')

//                 onSignOut()
//             })
//         } catch ({ message }) {
//             onFlowEnd()

//             onModal(message, 'warn')
//         }
//     }

//     toggleFav = id => {
//         const { props: { onFlowStart, onFlowEnd, onModal } } = this

//         onFlowStart()

//         try {
//             toggleFavVehicle(sessionStorage.token, id, error => {
//                 if (error) {
//                     onFlowEnd()

//                     onModal(error.message)

//                     return
//                 }

//                 onFlowEnd()
//             })
//         } catch ({ message }) {
//             onFlowEnd()

//             onModal(message, 'warn')
//         }
//     }

//     goToFavs = () => {
//         const { props: { onFlowStart, onFlowEnd, onModal } } = this

//         onFlowStart()

//         try {
//             retrieveFavVehicles(sessionStorage.token, (error, favs) => {
//                 if (error) {
//                     onFlowEnd()

//                     onModal(error.message)

//                     return
//                 }

//                 onFlowEnd()

//                 this.setState({ view: 'favs', favs })
//             })
//         } catch ({ message }) {
//             onFlowEnd()

//             onModal(message, 'warn')
//         }
//     }

//     render() {
//         logger.debug('Home -> render')

//         const { 
//             state: { view, vehicle, vehicles, query, favs }, 
//             props: { name, onSignOut }, 
//             goToProfile, 
//             goToItem, 
//             clearVehicle, 
//             updatePassword, 
//             goToSearch, 
//             search, 
//             unregister,
//             toggleFav,
//             goToFavs 
//         } = this

//         return <div id="home" className="home container container--vertical container--gapped">
//             <h1>Hola, <span className="name">{name? name : 'World'}</span>. ¡Bienvenido a nuestro sitio!</h1>

//             <div>
//                 <button type="button" className="button button--medium button--dark" onClick={goToProfile}>Profile</button>
//                 <button type="button" className="button button--medium button--dark" onClick={goToFavs}>Favs</button>
//                 <button type="button" className="button button--medium" onClick={onSignOut}>Sign out</button>
//             </div>

//             {view === 'search' && <>
//                 <Search onSearch={search} query={query} />

//                 {!vehicle && <Results items={vehicles} onItem={goToItem} />}

//                 {vehicle && <Detail item={vehicle} onBack={clearVehicle} onToggleFav={toggleFav} />}

//                 </>}

//             {view === 'profile' && <Profile onBack={goToSearch} onPasswordUpdate={updatePassword} onUnregister={unregister} />}

//             {view === 'favs' && <Favs items={favs} onBack={goToSearch} />}
//         </div>
//     }
// }

// export default Home