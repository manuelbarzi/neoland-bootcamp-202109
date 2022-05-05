import { useState } from 'react'
import logger from '../utils/logger'
import Home from './Home'
import Spinner from './Spinner'
import Modal from './Modal'
import AppContext from './AppContext'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Account from './Account'
import Profile from './Profile'
import Favs from './Favs'
import Newsletter from './Newsletter'
import Navbar from './Navbar'
import Cursor from './Cursor'

function App() {
    logger.debug('App -> render')

    const [modal, setModal] = useState(null)
    const [spinner, setSpinner] = useState(false)
    const [level, setLevel] = useState(null)
    
    const navigate = useNavigate()

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const showModal = (message, level = 'error') => {
        setModal(message)
        setLevel(level)
    }

    const acceptModal = () => setModal(null)

    const goToItem = item_id => navigate(`/items/${item_id}`)

    return <>
        <AppContext.Provider value={{
            onFlowStart: showSpinner,
            onFlowEnd: hideSpinner,
            onModal: showModal
        }}>
            {/* <Home /> */}
            
            <Navbar />

            <Cursor />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="items" element={<Results onItem={goToItem} />} />

                <Route path="items/:item_id" element={<Detail />} />

                <Route path="account" element={<Account />} />
                <Route path="profile" element={<Profile />} />

                <Route path="items/favs" element={<Favs onItem={goToItem} />} />

                <Route path="newsletter" element={<Newsletter />} />
            </Routes>

            {spinner && <Spinner />}

            {modal && <Modal level={level} message={modal} onAccept={acceptModal} />}   
        </AppContext.Provider>
    </>
}

export default App