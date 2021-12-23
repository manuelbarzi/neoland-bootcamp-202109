import { useState, useContext } from 'react'
import { useQueryParams } from '../hooks'
import { registerSubscription, toggleFavItem } from '../logic'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AppContext from './AppContext'
import logger from '../utils/logger'
import Navbar from './Navbar'
import Search from './Search'
import Results from './Results'
import Collection from './Collection'
import Detail from './Detail'
import Account from './Account'
import Profile from './Profile'
import Favs from './Favs'
import Newsletter from './Newsletter'
// import Trending from './Trending'
import './Home.css'

function Home() {
    logger.debug('Home -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const navigate = useNavigate()

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))
    const [view, setView] = useState('home')
    const [items, setItems] = useState([])
    // const [login, setLogin] = useState(false)

    const resetToken = () => {
        delete sessionStorage.token

        goToHome()

        onFlowEnd()
    }

    // const setLoggedIn = () => setLogin(true)

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

    const goToSearch = () => {
        setView('not-home')

        navigate('/search')
    }

    const goToCollection = store => {
        setView('not-home')

        navigate(`/search/store?q=${store}`)
    }

    const goToAccount = () => {
        setView('not-home')

        navigate('/account')
    }

    const goToFavs = () => navigate('/favs')

    const goToNewsletter = () => {
        setView('not-home')

        navigate('/newsletter')
    }

    const goToItem = item_id => navigate(`/search/items/item?q=${item_id}`)

    const goToProfile = () => {
        setView('not-home')
        
        navigate('/profile')
    }

    const goToHome = () => {
        setView('home')

        navigate('/')
    }


    return <>
        <div id="home" className="container container--vertical container--gapped">

            <Navbar onLogin={goToAccount} onProfile={goToProfile} onNewsletter={goToNewsletter} onFavs={goToFavs} onSearch={goToSearch} onLoggedOut={resetToken} onHome={goToHome} />

            <div className='container container--gapped'>
                <h1>Join conscious, committed life!</h1>
            </div>

            {view === 'home' && 
            <>
            <div>
                <button type='button' className="button button--medium button--dark" onClick={() => goToCollection('Zara')}>Zara</button>

                <button type='button' className="button button--medium button--dark" onClick={() => goToCollection('HM')}>H&M</button>

                <button type='button' className="button button--medium button--dark" onClick={() => goToCollection('Mango')}>Mango</button>

            </div>
            <div>
                <img className="home-image" src="//st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" />
            </div>
            {/* <div>
                <Trending onItem={goToItem} onToggle={toggleFav} />
            </div> */}
            </>
            }

            <Routes>
                <Route path="/" element={<h1></h1>} />
                <Route path="search" element={<Search onSearch={search} query={query} />} />
                <Route path="search/items" element={<Results onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="search/items/item" element={<Detail onBack={goToHome} onToggle={toggleFav} />} />

                <Route path="search/store" element={<Collection onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="/account" element={<Account onBack={goToHome} />} />
                <Route path="/profile" element={<Profile onBack={goToHome} onSignOut={resetToken} />} />

                <Route path="/favs" element={<Favs onBack={goToHome} onItem={goToItem} onToggle={toggleFav} />} />

                <Route path="/newsletter" element={<Newsletter onBack={goToHome} onNewsletter={registerForNewsletter} />} />
            </Routes>

        </div>
    </>
}

export default Home