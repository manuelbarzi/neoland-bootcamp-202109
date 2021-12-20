import { useState, useEffect, useContext } from 'react'
import { useQueryParams } from '../hooks'
import { retrieveUser, registerSubscription, toggleFavItem } from '../logic'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import AppContext from './AppContext'
import logger from '../utils/logger'
import Search from './Search'
import Results from './Results'
import Collection from './Collection'
import Detail from './Detail'
import Account from './Account'
import Profile from './Profile'
import Favs from './Favs'
import Newsletter from './Newsletter'


function Home() {
    logger.debug('Home -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const navigate = useNavigate()

    const location = useLocation()

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))
    const [view, setView] = useState('account')
    const [items, setItems] = useState([])

    useEffect(() => {
        async function homeUseEffect() {
            logger.debug('Home -> useEffect')

            const { token } = sessionStorage

            try {
                onFlowStart()

                const user = await retrieveUser(token)
                    
                if (user) 
                    setView('profile')

                onFlowEnd()

            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'warn')

                resetToken()

                return
            }
        }
        homeUseEffect();
      }, []);

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

    const registerForNewsletter = async (email) => {
        try {
            onFlowStart()

            await registerSubscription(email)
            
            onFlowEnd()
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const toggleFav = async (id) => {
        try {
            onFlowStart()

            await toggleFavItem(sessionStorage.token, id)

            setItems(items.map(item => {
                if (item.id === id) {
                    return { ...item, isFav: !item.isFav}
                }

                return item
            }))

            onFlowEnd()
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const goToCollection = store => navigate(`/items?q=${store}`)

    const goToAccount = () => navigate('/account')

    const goToFavs = () => navigate('/favs')

    const goToNewsletter = () => navigate('/newsletter')

    const goToItem = id => navigate(`/items/${id}`)

    const goToProfile = () => navigate('/profile')

    const goBackToHome = () => navigate('/')


    return <div id="home" className="container container--vertical container--gapped">
            <h1>Join conscious, committed life!</h1>
            
            <div className="container">
                {view === 'account' && <button type="button" className={`button button--medium ${location.pathname === '/account' && 'button--dark'}`} onClick={goToAccount}>Login</button>}
                {view === 'profile' && <button type="button" className={`button button--medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>}
                <button type="button" className={`button button--medium ${location.pathname === '/newsletter' && 'button--dark'}`} onClick={goToNewsletter}>Newsletter</button>
                <button type="button" className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>
            </div>

            <Routes>
                <Route path="/" element={<Search onSearch={search} onStore={goToCollection} query={query}/>}>
                    <Route path="items" element={<Results onItem={goToItem} onToggle={toggleFav} />} />
                    <Route path="items/store" element={<Collection onItem={goToItem} onToggle={toggleFav} />} />
                    <Route path="items/:id" element={<Detail onBack={goBackToHome} onToggle={toggleFav} />} />
                </Route>

                <Route path="/account" element={<Account onBack={goBackToHome} />} />
                <Route path="/profile" element={<Profile onBack={goBackToHome} onSignOut={signOut} />} />

                <Route path="/favs" element={<Favs onBack={goBackToHome} onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="/newsletter" element={<Newsletter onBack={goBackToHome} onNewsletter={registerForNewsletter} />} />
            </Routes>
        </div>
}

export default Home