import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logger from '../utils/logger'
import Logo from './Logo'
import image from '../assets/logical-echo-logo.png'
import './Navbar.css'

function Navbar() {
    logger.debug('Navbar -> render')

    const location = useLocation()
    const navigate = useNavigate()

    const [view, setView] = useState('')

    const goToSearch = () => navigate('/search')
    const goToAccount = () => navigate('/account')
    const goToProfile = () => navigate('/profile')
    const goToNewsletter = () => navigate('/newsletter')
    const goToFavs = () => navigate('/items/favs')
    const goToHome = () => navigate('/')

    const { token } = sessionStorage

    useEffect(() => {
        logger.debug('Navbar -> useEffect')

        if (token) {
            setView('loggedIn')
        } else {
            setView('loggedOut')
        }
      }, [token]);

    return <>
    <nav className="navbar">
        <div className="navbar-div">
            <div className="nav-wraper">
            <ul className="nav-list">
                <li className="nav-item">
                    <Logo image={image} text='Logical Echo' />
                </li>
                <li className="nav-item">
                <button type='button' className={`button button--medium ${location.pathname === '/' && 'button--dark'}`} onClick={goToHome}>Home</button>
                </li>
                <li className="nav-item">
                {view === 'loggedOut' && <button type='button' className={`button button--medium ${location.pathname === '/account' && 'button--dark'}`} onClick={goToAccount}>Login</button>}
                {view === 'loggedIn' && <button type='button' className={`button button--medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>}
                </li>
                <li className="nav-item">
                <button type='button' className={`button button--medium ${location.pathname === '/newsletter' && 'button--dark'}`} onClick={goToNewsletter}>Newsletter</button>
                </li>
                <li className="nav-item">
                <button type='button' className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>
                </li>
                <li className="nav-item dropdown">
                <button type='button' className={`button button--medium ${location.pathname === '/search' && 'button--dark'}`} onClick={goToSearch}>Search</button>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
}

export default Navbar