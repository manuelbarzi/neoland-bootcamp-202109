import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import logger from '../utils/logger'
import Logo from './Logo'
import Home from './Home'
import Spinner from './Spinner'
import Modal from './Modal'
import AppContext from './AppContext'
import image from '../assets/logical-echo-logo.png'


function App() {
    logger.debug('App -> render')

    const [modal, setModal] = useState(null)
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [level, setLevel] = useState(null)
    

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const showModal = (message, level = 'error') => {
        setModal(message)
        setLevel(level)
    }

    const acceptModal = () => setModal(null)


    return <>
        <AppContext.Provider value={{
            onFlowStart: showSpinner,
            onFlowEnd: hideSpinner,
            onModal: showModal
        }}>
            <Logo image={image} text='Logical Echo' />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            {spinner && <Spinner />}

            {modal && <Modal level={level} message={modal} onAccept={acceptModal} />}
        </AppContext.Provider>
    </>
}

export default App