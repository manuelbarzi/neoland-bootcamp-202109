import { useState } from 'react'
import logger from '../utils/logger'
import Home from './Home'
import Spinner from './Spinner'
import Modal from './Modal'
import AppContext from './AppContext'

function App() {
    logger.debug('App -> render')

    const [modal, setModal] = useState(null)
    const [spinner, setSpinner] = useState(false)
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
            <Home />

            {spinner && <Spinner />}

            {modal && <Modal level={level} message={modal} onAccept={acceptModal} />}   
        </AppContext.Provider>
    </>
}

export default App