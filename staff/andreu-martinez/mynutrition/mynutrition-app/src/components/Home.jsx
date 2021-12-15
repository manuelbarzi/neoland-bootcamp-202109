import { useState, useEffect, useContext } from 'react'
import logger from '../logger'
import './Home.sass'
import Profile from './Profile'
import ListMyEmails from './ListMyEmails'
import HomeLanding from './HomeLanding'
import SignIn from './SignIn'
import NewEmail from './NewEmail'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useQueryParams } from '../hooks'
import { retrieveUser } from '../logic'
import AppContext from './AppContext'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import SvgIcon from '@mui/material/SvgIcon'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout';
import Unregister from './Unregister'



function Home({ onSignOut, onAuthError }) {
    logger.debug('Home -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [name, setName] = useState(null)

    const queryParams = useQueryParams()

    // const [query, setQuery] = useState(queryParams.get('q'))

    const navigate = useNavigate()

    const location = useLocation()

    useEffect(async () => {
        logger.debug('Home -> useEffect (componentDidMount)')

        const { token } = sessionStorage

        if (token) {
            try {
                onFlowStart()

                const user = await retrieveUser(token)

                onFlowEnd()

                const { name } = user

                setName(name)
            } catch ({ message }) {
                onFlowEnd()

                onFeedback(message, 'warn')

                onAuthError()
            }
        }
    }, [])

    // const search = query => {
    //     setQuery(query)

    //     navigate(`/search?q=${query}`)
    // }

    const goToHome = () => navigate('/home')
    const goToProfile = () => navigate('/profile')
    const email = () => navigate('/email')
    const goToUnregister = () => navigate('/unregister')

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }


    const sendEmail = () => {

        const { token } = sessionStorage
        // llamar a tu función del logic y le pasarás como parámetros todo lo requerido
        // token, miId, el idDestino, subject, 


    }


    return <>
    <div className="wrap">
            <div className="header">
                <div className='header--user'>
                    <p>Hello, <span>{name ? name : 'World'}</span>!</p>
                </div>
                <div className='header--title'>
                    <h1>MyNutriMethod</h1>
                </div>
                <div className="header--menu">
                    <div className="header--menu__items">          
                        <HomeIcon color="primary" onClick={goToHome}/>
                    </div>
                    <div className="header--menu__items">
                        <Badge badgeContent={1} color="primary">
                            <MailIcon color="secondary" onClick={email} color="action" />
                        </Badge>
                    </div>
                    <div className="header--menu__items">
                        <AccountCircle color="primary" onClick={goToProfile}></AccountCircle>
                    </div>
                    <div className="header--menu__items">
                        <LogoutIcon color="primary" onClick={onSignOut}></LogoutIcon>
                    </div>
                </div>
            </div>
            <div className="center">
                <Routes>
                        <Route path="/home" element={<HomeLanding onSignOut={onSignOut} />} />
                        <Route path="/profile" element={<Profile onSignOut={onSignOut} />} />
                        <Route path="/email" element={<ListMyEmails />} />
                        <Route path="/email" element={<NewEmail />} />
                        <Route path="/unregister" element={<Unregister goToUnregister={goToUnregister} onBack={goToProfile} />} />
                </Routes>
            </div>
            <div className="footer">
                <p>footer</p>
            </div>
    </div>
    </>
}

export default Home