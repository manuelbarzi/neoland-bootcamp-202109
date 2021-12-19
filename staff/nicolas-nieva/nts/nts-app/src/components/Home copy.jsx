import { useState } from 'react'
import Search from "./Search"
import Results from './Results'
import ResultDetails from './ResultDetails'
import Profile from './Profile'
import UnRegister from './Unregister'
import Favs from './Favs'
import Cart from './Cart'


//Logical

import {
  updateUserPassword,
  unregisterUser,
  searchVehicles,
  retrieveVehicle,
  toggleFav,
  retrieveFavVehicles,
  retrieveVehiclesCart,
  addVehicleToCart,
  removeVehicleFromCart
} from '../logic/index'


function Home({ onSignOut, showSpinner, hideSpinner, showModal }) {
  const [view, setView] = useState('search')
  const [vehicles, setVehicles] = useState([])
  const [vehicle, setVehicle] = useState({})
  const [favs, setFavs] = useState([])
  const [cart, setCart] = useState([])
  const [username, setUsername] = useState (null)


  const goToProfile = () => setView('profile')
  const goToResults = () => setView('results')
  const goToUnregister = () => setView('unregister')



  const updatePassword = (oldPassword, password) => {
    showSpinner()
    try {
      updateUserPassword(sessionStorage.token, oldPassword, password, error => {
        if (error) {
          showModal(error.message)
          hideSpinner()
          return
        }
        showModal('Password updated')
        hideSpinner()
      })
    } catch (error) {
      showModal(error.message)
      hideSpinner()
      return
    }
    hideSpinner()
  }

  const unRegister = (password) => {
    showSpinner()
    try {
      unregisterUser(sessionStorage.token, password, error => {
        if (error) {
          showModal(error.message)
          hideSpinner()
          return
        }
        showModal('User deleted')

        onSignOut()

        hideSpinner()
      })
    } catch (error) {
      showModal(error.message)
      hideSpinner()
    }
  }

  const onToggleFav = id => {
    showSpinner()
    try {
      toggleFav(sessionStorage.token, id, error => {
        if (error) {
          hideSpinner()

          showModal(error.message)

          return
        }

        if (vehicle && vehicle.id === id)
          setVehicle({ ...vehicle, isFav: !vehicle.isFav })

        if (vehicles.length)
          setVehicles(vehicles.map(vehicle => {
            if (vehicle.id === id) {
              return { ...vehicle, isFav: !vehicle.isFav }
            }

            return vehicle

          }))

        if (favs.length)
          setFavs(favs.filter(vehicle => vehicle.id !== id))

        hideSpinner()

      })
    } catch (error) {
      hideSpinner()
      showModal(error.message)
    }
  }

  const goFavs = () => {
    showSpinner()
    try {
      retrieveFavVehicles(sessionStorage.token, (error, favs) => {
        if (error) {
          showModal(error.message)
          hideSpinner()
          return
        }
        hideSpinner()
        setFavs(favs)
        setView('favs')
      })

    } catch (error) {
      showModal(error.message)
      hideSpinner()

    }
  }

  const addToCart = id => {
    showSpinner()
    try {
      addVehicleToCart(sessionStorage.token, id, error => {
        if (error) {
          hideSpinner()

          showModal(error.message)
          return
        }
        setCart(cart.map(vehicle => {
          if (vehicle.id === id)
            return { ...vehicle, qty: vehicle.qty + 1 }

          return vehicle
        }))

        hideSpinner()

      })
    } catch (error) {
      hideSpinner()

      showModal(error.message)
    }
  }

  const goToCart = () => {
    showSpinner()

    try {
      retrieveVehiclesCart(sessionStorage.token, (error, vehicles) => {
        if (error) {
          hideSpinner()

          showModal(error.message)

          return
        }

        setCart(vehicles)
        setView('cart')
        hideSpinner()
      })
    } catch (error) {
      hideSpinner()

      showModal(error.message)
    }
  }

  const removeFromCart = id => {
    showSpinner()

    try {
      removeVehicleFromCart(sessionStorage.token, id, error => {
        if (error) {
          hideSpinner()

          showModal(error.message)

          return
        }

        setCart(cart.reduce((accum, vehicle) => {
          if (vehicle.id === id) {
            if (vehicle.qty < 2)
              return accum

            vehicle = { ...vehicle, qty: vehicle.qty - 1 }
          }

          accum.push(vehicle)

          return accum
        }, []))

        hideSpinner()
      })
    } catch (error) {
      hideSpinner()

      showModal(error.message)
    }
  }

  return <>
    <div className="home container container--gapped container--vertical">
      <div className="container">
        <p>Hello, <span className="name">{username}</span>!</p><br />
      </div>
      <div className="container">
        <button type="button" className="button button-medium button--dark" onClick={() => goToProfile()}>Profile</button>
        <button className="button button-medium button--dark" onClick={goFavs} >Favs</button>
        <button className="button" onClick={goToCart}>🛒</button>
        <button className="button button-medium button" onClick={() => onSignOut()}>Sign out</button>
      </div>

      {(view === 'search' || view === 'results') && <Search  />}
      {view === 'results' && <Results items={vehicles} onToggleFav={onToggleFav} />}
      {view === 'profile' && <Profile onGoBack={goToResults} onSubmitUpdate={updatePassword} onUnRegister={goToUnregister} />}
      {view === 'favs' && <Favs onGoback={goToResults} items={favs} onToggleFav={onToggleFav}  />}
      {view === 'details' && <ResultDetails item={vehicle} onBack={goToResults} onToggleFav={onToggleFav} onAddToCart={addToCart} />}
      {view === 'unregister' && <UnRegister onSubmitUnRegister={unRegister} onGoBack={goToProfile} showModal={showModal} />}
      {view === 'cart' && <Cart items={cart} onBack={goToResults} onAdd={addToCart} onRemove={removeFromCart}  />}

    </div>
  </>
}

export default Home