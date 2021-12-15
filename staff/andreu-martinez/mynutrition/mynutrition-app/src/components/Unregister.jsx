import logger from '../logger'
import '../style.sass'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Unregister({ onUnregister, onBack }) {
    logger.debug('Unregister -> render')

    return <div className="unregister container">

        <form onSubmit={event => {
            event.preventDefault()

            const { target: { password: { value: password } } } = event 

            onUnregister(password)
        }}>
            <div><TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="password"
                    /></div>

            <div><Button type="submit" fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >Unregister</Button></div>
                <div><Button  onClick={onBack} fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >Back</Button></div>
        </form>
    </div>
}

export default Unregister