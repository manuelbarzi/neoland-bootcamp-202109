import logger from '../logger'

function Landing(props) {
    logger.info("Landing -> render")
    return (
        <div className="landing container container--vertical">
            <h1 className="title-landing">Demo App</h1>
            <button className="button buttons--landing" onClick={() => props.onSignIn()}>Iniciar Sesión</button>
            <button className="button buttons--landing" onClick={() => props.onSignUp()}>Registrarse</button>
        </div>
    )
}

export default Landing