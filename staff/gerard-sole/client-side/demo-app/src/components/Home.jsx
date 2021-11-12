import React, { useState } from "react"
import Search from "./Search"
import { retrieveVehicle, searchVehicles, unregisterUser, updateUserPassword, toggleFavVehicle, retrieveFavVehicles, retrieveVehiclesCart, addVehicleToCart, removeVehicleFromCart } from '../logic/index'
import Results from "./Results"
import Detail from "./Detail"
import Profile from "./Profile"
import Favs from "./Favs"
import Cart from "./Cart"

function Home( { name, toLanding, openModal } ) {

    const [view, setView] = useState( "search" )
    const [vehicles, setVehicles] = useState( [] )
    const [vehicle, setVehicle] = useState( null )
    const [favs, setFavs] = useState( [] )
    const [cart, setCart] = useState( [] )
    const goFavs = () => {
        try {
            retrieveFavVehicles( sessionStorage.token, ( error, favs ) => {
                if ( error ) {
                    openModal( error.message )
                }
                setView( 'favs' )
                setFavs( favs )
            } )
        }
        catch ( error ) {
            openModal( error.message )

        }
    }

    const toogleFav = ( id ) => {
        try {
            toggleFavVehicle( sessionStorage.token, id, ( ( error ) => {
                if ( error ) {
                    openModal( error.message )
                } else if ( vehicle && id === vehicle.id ) {
                    setVehicle( { ...vehicle, isFav: !vehicle.isFav } )
                } else if ( vehicles.length ) {
                    setVehicles( vehicles.map( ( vehicle ) => {
                        if ( vehicle.id === id ) {
                            return { ...vehicle, isFav: !vehicle.isFav }
                        } else return vehicle
                    } ) )
                } else if ( favs.length ) {
                    setFavs( favs.filter( ( vehicle ) => vehicle.id !== id ) )
                }
            } ) )

        }
        catch { }
    }

    const goToItem = vehicleid => {

        try {
            retrieveVehicle( sessionStorage.token, vehicleid, ( error, vehicle ) => {
                if ( error ) { alert( error.message ) }
                else {
                    setVehicle( vehicle );
                    setView( "search" )
                }
            } )
        } catch ( error ) {
            alert( error.message )
        }
    }

    const goToCart = () => {
        try {
            retrieveVehiclesCart(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    openModal(error.message)

                    return
                }

                setCart(vehicles)

                setView('cart')
            })
        } catch (error) {
            openModal(error.message)
        }
    }
    
    const onAddToCart = id => {
        try {
            addVehicleToCart( sessionStorage.token, id, error => {
                if ( error ) {
                    openModal( error.message )

                    return
                }

                setCart( cart.map( vehicle => {
                    if ( vehicle.id === id )
                        return { ...vehicle, qty: vehicle.qty + 1 }

                    return vehicle
                } ) )
            } )
        } catch ( error ) {
            openModal( error.message )
        }
    }
    
    const onRemoveFromCart = id => {
        try {
            removeVehicleFromCart( sessionStorage.token, id, error => {
                if ( error ) {
                    openModal( error.message )

                    return
                }

                setCart( cart.reduce( ( accum, vehicle ) => {
                    if ( vehicle.id === id ) {
                        if ( vehicle.qty < 2 )
                            return accum

                        vehicle = { ...vehicle, qty: vehicle.qty - 1 }
                    }

                    accum.push( vehicle )

                    return accum
                }, [] ) )
            } )
        } catch ( error ) {
            openModal( error.message )
        }
    }
    
    const changePassword = ( oldPassword, password ) => {
        try {
            updateUserPassword( sessionStorage.token, oldPassword, password, ( error ) => {
                if ( error ) openModal( error.message )
                else setView( "search" )
            } )
        } catch ( error ) {
            openModal( error.message )
        }
    }

    
    const deleteAccount = ( password ) => {
        try {
            unregisterUser( sessionStorage.token, password, ( error ) => {
                if ( error ) openModal( error.message )
                else { toLanding() }
            } )
        } catch ( error ) {
            openModal( error.message )
        }
    }

    const search = ( query ) => {
        setVehicles( [] )

        try {
            searchVehicles( sessionStorage.token, query, ( error, vehicles ) => {
                if ( error ) openModal( error.message )
                else setVehicles( vehicles )
            } )

        } catch ( error ) {
            openModal( error.message )
        }

    }
    
    return <div className="home container container--gapped container--vertical">
        <div className="container">
            <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
            <button className="button button--dark" onClick={() => setView( 'profile' )}>Profile</button>
            <button className="button button" onClick={() => toLanding()}>Sign out</button>
        </div>

        {view === 'search' && <><Search 
        onGoToCart={goToCart}
        onSearch={search}
            onGoFavs={goFavs}
        ></Search>


            {!vehicle && <Results
                items={vehicles}
                onItem={goToItem}
                onToggleFav={toogleFav}
            ></Results>}

            {vehicle && <Detail 
            item={vehicle} 
            onAddToCart={onAddToCart}  
            goSearch={() => { setVehicle( null ); setVehicles( [] ) }}
            onToggleFav={toogleFav}
            ></Detail>}
        </>}

        {view === 'profile' && <Profile
            goSearch={() => { setVehicle( null ); setView( "search" ); setVehicles( [] ) }}
            onChangePassword={changePassword}
            onDeleteAccount={deleteAccount}
            ></Profile>}

        {view === 'favs' && <Favs
            items={favs}
            onItem={goToItem}
            onToggleFav={toogleFav}
            goSearch={() => setView( 'search' )}
        ></Favs>}

        {view === 'cart' && <Cart
            items = {cart}
            onBack ={() => {setView( "search" )}}
            onAdd={onAddToCart} 
            onRemove={onRemoveFromCart}
        ></Cart>}
    </div>

}

export default Home