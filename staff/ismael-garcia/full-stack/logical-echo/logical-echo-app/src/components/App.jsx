import { useState } from 'react'
import logger from '../utils/logger'
import Logo from './Logo'
import Home from './Home'
import Spinner from './Spinner'
import Modal from './Modal'
import '../assets/logical-echo-logo.png'

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
        <Logo image="../assets/logical-echo-logo.png" text='Logical Echo' />

        {<Home  
            onFlowStart={showSpinner}
            onFlowEnd={hideSpinner}
            onModal={showModal} 
        />}

        {spinner && <Spinner />}

        {modal && <Modal level={level} message={modal} onAccept={acceptModal} />}
    </>
}

export default App