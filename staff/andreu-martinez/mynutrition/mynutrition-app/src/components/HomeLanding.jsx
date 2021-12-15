import logger from '../logger'
import '../style.sass'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function HomeLanding({ onUnregister, goToProfile }) {
    logger.debug('Unregister -> render')

    return <div className="unregister container">
        <div>Home Landing</div>
    </div>
}

export default HomeLanding