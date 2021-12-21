import { useState, useEffect, useContext } from 'react'
import { retrieveUser } from '../logic'
import logger from '../utils/logger'
import AppContext from './AppContext'

function Navbar({ onLogin, onProfile, onNewsletter, onFavs, onSearch }) {
    logger.debug('Navbar -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [view, setView] = useState('loggedOut')

    useEffect(() => {
        (async () => {
            logger.debug('Home -> useEffect')

            const { token } = sessionStorage

            if (token) {
                try {
                    onFlowStart()
    
                    const user = await retrieveUser(token)
                        
                    if (user) 
                        setView('loggedIn')
    
                    onFlowEnd()
    
                } catch ({ message }) {
                    onFlowEnd()
    
                    onModal(message, 'warn')
    
                    resetToken()
    
                    return
                }
            }
        })()
      }, []);

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Logical Echo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <a className="nav-link active" href="/">Home
                    <span className="visually-hidden">(current)</span>
                </a>
                </li>
                <li className="nav-item">
                {view === 'loggedOut' && <button type='button' className="btn btn-dark disabled" onClick={onLogin}>Login</button>}
                {view === 'loggedIn' && <button type='button' className="btn btn-dark disabled" onClick={onProfile}>Profile</button>}
                </li>
                <li className="nav-item">
                <button type='button' className="btn btn-dark disabled" onClick={onNewsletter}>Newsletter</button>
                </li>
                <li className="nav-item">
                <button type='button' className="btn btn-dark disabled" onClick={onFavs}>Favs</button>
                </li>
                <li className="nav-item dropdown">
                <button type='button' className="btn btn-dark disabled" onClick={onSearch}>Search</button>
                </li>
            </ul>
            </div>
        </div>
    </nav>
}

export default Navbar
