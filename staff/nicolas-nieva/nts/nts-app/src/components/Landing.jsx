import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'

function Landing({ onSignIn, onSignUp }) {
    return (
        <>
        <div className='center_welcome'>
        <h1 className="welcome">Welcome</h1>
        </div>
        <div className="landing container container--vertical container--gapped">
            <Button  className="button"  onClick={() => onSignUp()}>Registrar Agencia</Button>
            <div className='container--gapped'></div>
            <Button  className="button" onClick={() => onSignIn()}>Iniciar Sesion</Button>
        </div>
        </>
    )
    
}

export default Landing