import { useState, useEffect, useContext } from 'react'
import { useQueryParams } from '../hooks'
import { retrieveUser, registerSubscription, toggleFavItem } from '../logic'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import AppContext from './AppContext'
import logger from '../utils/logger'
import Navbar from '.Navbar'
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
    const [view, setView] = useState('loggedOut')
    const [items, setItems] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         logger.debug('Home -> useEffect')

    //         const { token } = sessionStorage

    //         if (token) {
    //             try {
    //                 onFlowStart()
    
    //                 const user = await retrieveUser(token)
                        
    //                 if (user) 
    //                     setView('loggedIn')
    
    //                 onFlowEnd()
    
    //             } catch ({ message }) {
    //                 onFlowEnd()
    
    //                 onModal(message, 'warn')
    
    //                 resetToken()
    
    //                 return
    //             }
    //         }
    //     })()
    //   }, []);

    const resetToken = () => {
        delete sessionStorage.token

        setView('loggedOut')

        onFlowEnd()
    }

    const signOut = () => resetToken()

    const search = query => {
        setQuery(query)

        navigate(`/search/items?q=${query}`)
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

    const toggleFav = async (item_id) => {
        try {
            onFlowStart()

            await toggleFavItem(sessionStorage.token, item_id)

            setItems(items.map(item => {
                if (item.item_id === item_id) {
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

    const goToCollection = store => navigate(`/search/store?q=${store}`)

    const goToAccount = () => navigate('/account')

    const goToFavs = () => navigate('/favs')

    const goToNewsletter = () => navigate('/newsletter')

    const goToItem = item_id => navigate(`/search/items/item?q=${item_id}`)

    const goToProfile = () => navigate('/profile')

    const goBackToHome = () => navigate('/')


    return <>
        <div id="home" className="container container--vertical container--gapped">
            <h1>Join conscious, committed life!</h1>

            <Navbar onLogin={goToAccount} onProfile={goToProfile} onNewsletter={goToNewsletter} onFavs={goToFavs} onSearch={goToSearch} ></Navbar>
            {/* <div>
                <button type='button' className={`button button--medium ${location.pathname === '/newsletter' && 'button--dark'}`} onClick={goToNewsletter}>Newsletter</button>

                <button type='button' className={`button button--medium ${location.pathname === '/search' && 'button--dark'}`} onClick={goToSearch}>Search</button>
            </div>
            
            <div className="container">
                {view === 'loggedOut' && <button type='button' className={`button button--medium ${location.pathname === '/account' && 'button--dark'}`} onClick={goToAccount}>Login</button>}

                {view === 'loggedIn' && <button type='button' className={`button button--medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>}
                
                <button type='button' className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>

            </div> */}

            <div>
                <button type='button' className="button button--medium button--dark" onClick={() => goToCollection('Zara')}>Zara</button>

                <button type='button' className="button button--medium button--dark" onClick={() => goToCollection('HM')}>H&M</button>

                <button type='button' className="button button--medium button--dark" onClick={() => goToCollection('Mango')}>Mango</button>

            </div>

            <Routes>
                <Route path="/" element= {<h1>Hola Isma</h1>}/>
                <Route path="search" element={<Search onSearch={search} query={query}/>} />
                <Route path="search/items" element={<Results onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="search/items/item" element={<Detail onBack={goBackToHome} onToggle={toggleFav} />} />

                <Route path="search/store" element={<Collection onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="/account" element={<Account onBack={goBackToHome} />} />
                <Route path="/profile" element={<Profile onBack={goBackToHome} onSignOut={signOut} />} />

                <Route path="/favs" element={<Favs onBack={goBackToHome} onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="/newsletter" element={<Newsletter onBack={goBackToHome} onNewsletter={registerForNewsletter} />} />
            </Routes>

        </div>
    </>
}

export default Home