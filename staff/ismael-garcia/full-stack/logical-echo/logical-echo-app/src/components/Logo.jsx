import { useNavigate } from 'react-router-dom'
import logger from '../utils/logger'
import './Logo.css'

function Logo() {
    logger.debug('Logo -> render')

    const navigate = useNavigate()

    const goToHome = () => navigate('/')
    
    return <div className="logo centered-axis-xy clickable" onClick={goToHome} >
        {/* <img className="logo__image" src={image} alt='logo: a natural cotton plant' width="32px" /> */}
        <h1 className='logo__text logical'>Logical</h1>
        <h1 className='logo__text echo'>Echo</h1>
        {/* <h1 className="logo__text">{text}</h1> */}
    </div>
}

export default Logo