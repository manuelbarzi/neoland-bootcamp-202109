import { useLocation, useNavigate } from 'react-router-dom'
import logger from '../utils/logger'
import './Footer.css'

function Footer() {
    logger.debug('Footer -> render')

    const location = useLocation()
    const navigate = useNavigate()

    const goToNewsletter = () => navigate('/newsletter')
    
    return <div className="footer">
        <button type='button' className={`button button--medium button--newsletter fade-in clickable ${location.pathname === '/newsletter' && 'button--emphasized'}`} onClick={goToNewsletter}>Subscribe to our Newsletter</button>    
    </div>
}

export default Footer