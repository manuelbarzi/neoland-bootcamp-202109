import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logger from '../utils/logger'
import './Navbar.css'

function Navbar() {
    logger.debug('Navbar -> render')

    const location = useLocation()
    const navigate = useNavigate()

    const [view, setView] = useState('')

    const goToSearch = () => navigate('/search')
    const goToAccount = () => navigate('/account')
    const goToProfile = () => navigate('/profile')
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
        <div className="navbar container--vertical">
            <h1 className='nav__logo clickable' onClick={goToHome}>L E</h1>

            <div className='nav__buttons-wrapper'>
                {view === 'loggedOut' && <button type='button' className={`button button--medium clickable ${location.pathname === '/account' && 'button--emphasized'}`} onClick={goToAccount}>Login</button>}
                {view === 'loggedIn' && <button type='button' className={`button button--medium clickable ${location.pathname === '/profile' && 'button--emphasized'}`} onClick={goToProfile}>Profile</button>}

                <button id='search-button' type='button' className={`button button--medium clickable ${location.pathname === '/search' && 'button--emphasized'}`} onClick={goToSearch}>Search</button>
            </div>
        </div>
    </>
}

export default Navbar