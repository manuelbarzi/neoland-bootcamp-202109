import { useState } from 'react'
import logger from '../utils/logger'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Profile from './Profile'
import Favs from './Favs'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useQueryParams } from '../hooks'

function Home({ name, onFlowStart, onFlowEnd, onSignOut, onModal }) {
    logger.debug('Home -> render')

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))

    const navigate = useNavigate()

    const location = useLocation()

    const search = query => {
        setQuery(query)

        navigate(`/search?q=${query}`)
    }

    const goToItem = id => navigate(`/items/${id}`)

    const goToProfile = () => navigate('/profile')

    const goToSearch = () => search(query)

    const goToFavs = () => navigate('/favs')

    return <div id="home" className="container container--vertical container--gapped">
            <h1>Hi, <span className="name">{name? name : 'World'}</span>. Join conscious, committed life!</h1>
            
            <div className="container">   
                <button type="button" className={`button button--medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>
                <button type="button" className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>
                <button type="button" className="button button--medium" onClick={onSignOut}>Sign out</button>
            </div>

            <Routes>
                <Route path="/" element={<Search onSearch={search} query={query} />}>
                    <Route path="search" element={<Results onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
                    <Route path="vehicles/:id" element={<Detail onBack={goToSearch} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
                </Route>

                <Route path="/profile" element={<Profile onBack={goToSearch} onSignOut={onSignOut} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
                <Route path="/favs" element={<Favs onBack={goToSearch} onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
            
            </Routes>
        </div>
}

export default Home