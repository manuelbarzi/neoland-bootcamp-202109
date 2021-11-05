import logger from '../logger'
import Logo from './Logo'

function Landing({ onSignIn, onSignUp }) {
    logger.info("Landing -> render")
    return (
        <div className="landing container container--vertical">
            <Logo image="./assets/logo.png" />
            <h1 className="title-landing">Demo App</h1>
            <button className="button buttons--landing" onClick={onSignIn}>Iniciar Sesión</button>
            <button className="button buttons--landing" onClick={onSignUp}>Registrarse</button>
        </div>
    )
}

export default Landing