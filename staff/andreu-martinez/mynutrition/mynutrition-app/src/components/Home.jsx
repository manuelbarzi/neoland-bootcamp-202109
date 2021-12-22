import { useState, useEffect, useContext } from 'react'
import logger from '../logger'
import './Home.sass'
import Profile from './Profile'
import Inbox from './Inbox'
import HomeLanding from './HomeLanding'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { retrieveUser, retrieveMessages} from '../logic'
import AppContext from './AppContext'


///MUI
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import SvgIcon from '@mui/material/SvgIcon'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout';


function Home({ onSignOut, onAuthError }) {
    logger.debug('Home -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [name, setName] = useState(null)
    const [messageCount, setMessageCount] = useState()

    const navigate = useNavigate()
    const goToHome = () => navigate('/home')
    const goToProfile = () => navigate('/profile')
    const goToMessages = () => {
        navigate('/inbox')
    
    }

    useEffect(async () => {
        logger.debug('Home -> useEffect (componentDidMount)')

        const { token } = sessionStorage

        if (token) {
            try {
                onFlowStart()
                const res = await retrieveMessages(token)
                const res2 = await retrieveUser(token)
                const foo = res.reduce((previousValue, { read }) => !read ? previousValue + 1 : 0, 0)
                setMessageCount(foo)

                onFlowEnd()

                setName(res2.name)

            } catch ({ message }) {
                onFlowEnd()

                onFeedback(message, 'warn')

                onAuthError()
            }
        }
    }, [])

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
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
                        <HomeIcon color="primary" onClick={goToHome} />
                    </div>
                    <div className="header--menu__items">
                        <Badge badgeContent={messageCount} color="primary">
                            <MailIcon color="secondary" onClick={goToMessages} color="action" />
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
                        <Route path="/inbox" element={<Inbox />} />
                </Routes>
            </div>
            <div className="footer">
                <p>footer</p>
            </div>
    </div>
    </>
}

export default Home