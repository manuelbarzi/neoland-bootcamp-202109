import { useState } from "react"
import logger from '../logger'
import Profile from "./Profile"
import Search from "./Search"
import Details from "./Details"
import Results from "./Results"
import Favs from "./Favs"
import Cart from './Cart'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useQueryParams } from '../hooks'
function Home({ name, onSignOut, startSpinner, endSpinner, onModal }) {
    logger.debug('Home -> render')

    const queryParams = useQueryParams()
    const [query, setQuery] = useState(queryParams.get('q'))
    const navigate = useNavigate()
    const location = useLocation()


    const search = query => {

        setQuery(query)

        navigate(`/search?q=${query}`)
    }

    const goToItem = id => navigate(`/vehicles/${id}`)

    const goToProfile = () => navigate('/profile')

    const goToSearch = () => search(query)

    const goToFavs = () => navigate('/favs')

    const goToCart = () => navigate('/cart')


    return <div className="home container container--gapped container--vertical "  >
        <div className="container">
            <p>Hello, <span className="name">{name}</span>!</p>
            <button className={`button button-medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile} >Profile</button>
            <button className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>
            <button className={`button button-medium ${location.pathname === '/cart' && 'button--dark'}`} onClick={goToCart}>Cart</button>
            <button className="button button-medium button" onClick={onSignOut}>Sign out</button>
        </div>
        
        <Routes>
            <Route path="/" element={<Search onSearch={search} query={query} />}>
                <Route path="search" element={
                    <Results onItem={goToItem} startSpinner={startSpinner} endSpinner={endSpinner} onModal={onModal} />
                } />
                <Route path="vehicles/:id" element={
                    <Details onBack={goToSearch} startSpinner={startSpinner} endSpinner={endSpinner} onModal={onModal} />
                } />
            </Route>

            <Route path="/profile" element={<Profile onBack={goToSearch} onSignOut={onSignOut} startSpinner={startSpinner} endSpinner={endSpinner} onModal={onModal} />} />
            <Route path="/favs" element={<Favs onBack={goToSearch} onItem={goToItem} startSpinner={startSpinner} endSpinner={endSpinner} onModal={onModal} />} />
            <Route path="/cart" element={<Cart onBack={goToSearch} onItem={goToItem} startSpinner={startSpinner} endSpinner={endSpinner} onModal={onModal} />} />
        </Routes>
    </div >
}


export default Home