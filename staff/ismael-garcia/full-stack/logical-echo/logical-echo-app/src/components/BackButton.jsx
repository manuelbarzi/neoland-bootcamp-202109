import { useNavigate } from 'react-router-dom'
import logger from '../utils/logger'
import './BackButton.css'

function BackButton() {
    logger.debug('LE -> render')

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return <>
        <button className="back clickable" onClick={goBack}>
            <svg viewBox="0 0 50 9" width="100%"><path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77"></path></svg>
        </button>
    </>
}

export default BackButton
