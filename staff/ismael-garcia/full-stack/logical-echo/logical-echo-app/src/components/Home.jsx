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
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'


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

            if (token) {
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

        navigate(`/items?q=${query}`)
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

    const goToSearch = () => navigate('/search')

    const goToCollection = store => navigate(`/items/store?q=${store}`)

    const goToAccount = () => navigate('/account')

    const goToFavs = () => navigate('/favs')

    const goToNewsletter = () => navigate('/newsletter')

    const goToItem = id => navigate(`/items/item?itemid=${id}`)

    const goToProfile = () => navigate('/profile')

    const goBackToHome = () => navigate('/')


    return <div id="home" className="container container--vertical container--gapped">
            <Typography>Join conscious, committed life!</Typography>

            <div>
                <Button type="button" className={`button button--medium ${location.pathname === '/newsletter' && 'button--dark'}`} onClick={goToNewsletter}>Newsletter</Button>

                <Button type="button" className={`button button--medium ${location.pathname === '/search' && 'button--dark'}`} onClick={goToSearch}>Search</Button>
            </div>
            
            <div className="container">
                {view === 'account' && <Button type="button" className={`button button--medium ${location.pathname === '/account' && 'button--dark'}`} onClick={goToAccount}>Login</Button>}

                {view === 'profile' && <Button type="button" className={`button button--medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</Button>}
                
                <Button type="button" className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</Button>

            </div>

            <div>
                <Button type="button" className="button button--medium button--dark" onClick={event => {
                    goToCollection('Zara') 
                }}>Zara</Button>

                <Button type="button" className="button button--medium button--dark" onClick={event => {
                    goToCollection('HM')
                }}>H&M</Button>

                <Button type="button" className="button button--medium button--dark" onClick={event => {
                    goToCollection('Mango')
                }}>Mango</Button>

            </div>

            <Routes>
                <Route path="/search" element={<Search onSearch={search} query={query}/>}>
                    <Route path="items" element={<Results onItem={goToItem} onToggle={toggleFav} />} />
                    <Route path="items/item" element={<Detail onBack={goBackToHome} onToggle={toggleFav} />} />
                </Route>

                <Route path="/store" element={<Collection onItem={goToItem} onToggle={toggleFav} />}>
                    
                </Route>

                <Route path="/account" element={<Account onBack={goBackToHome} />} />
                <Route path="/profile" element={<Profile onBack={goBackToHome} onSignOut={signOut} />} />

                <Route path="/favs" element={<Favs onBack={goBackToHome} onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="/newsletter" element={<Newsletter onBack={goBackToHome} onNewsletter={registerForNewsletter} />} />
            </Routes>
        </div>
}

export default Home