import { useState, useEffect } from 'react'
import { useQueryParams } from '../hooks'
import { retrieveUser } from '../logic'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import logger from '../utils/logger'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Account from './Account'
import Profile from './Profile'
import Favs from './Favs'
import Newsletter from './Newsletter'


function Home({ onFlowStart, onFlowEnd, onModal }) {
    logger.debug('Home -> render')

    const navigate = useNavigate()

    const location = useLocation()

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))
    const [view, setView] = useState('account')

    useEffect(() => {
        logger.debug('Home -> useEffect')

        const { token } = sessionStorage

        if (token) {
            try {
                retrieveUser(token, (error) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    setView('profile')
                    onFlowEnd()
                })
            } catch ({ message }) {
                onModal(message, 'warn')

                resetToken()

                return
            }
        }
    }, [])

    const resetToken = () => {
        delete sessionStorage.token

        onFlowEnd()
    }

    const signOut = () => {
        resetToken()

        setView('account')
    }

    const search = query => {
        setQuery(query)

        navigate(`/search?q=${query}`)
    }

    const retrieveCollection = store => {
        
    }

    const goToAccount = () => navigate('/account')

    const goToFavs = () => navigate('/favs')

    const goToNewsletter = () => navigate('/newsletter')

    const goToItem = id => navigate(`/items/${id}`)

    const goToProfile = () => navigate('/profile')

    const goBackToHome = () => navigate('/')


    return <div id="home" className="container container--vertical container--gapped">
            <h1>Join conscious, committed life!</h1>
            
            <div className="container">
                {view === 'account' && <button type="button" className={`button button--medium ${location.pathname === '/account' && 'button--dark'}`} onClick={goToAccount}>Account</button>}
                {view === 'profile' && <button type="button" className={`button button--medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>}
                <button type="button" className={`button button--medium ${location.pathname === '/newsletter' && 'button--dark'}`} onClick={goToNewsletter}>Newsletter</button>
                <button type="button" className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>
            </div>

            <Routes>
                <Route path="/" element={<Search onSearch={search} onStore={retrieveCollection} query={query}/>}>
                    <Route path="search" element={<Results onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
                    <Route path="items/:id" element={<Detail onBack={goBackToHome} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
                </Route>

                <Route path="/account" element={<Account onBack={goBackToHome} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
                <Route path="/profile" element={<Profile onBack={goBackToHome} onSignOut={signOut} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />

                <Route path="/favs" element={<Favs onBack={goBackToHome} onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />

                <Route path="/newsletter" element={<Newsletter onBack={goBackToHome} onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onModal={onModal} />} />
            </Routes>
        </div>
}

export default Home