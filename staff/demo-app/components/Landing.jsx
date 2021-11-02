function Landing(props) {
    logger.info("Landing -> render")
    return (
        <div className="landing container container--vertical">
            <button className="button buttons--landing" onClick={() => props.onSignIn()}>Iniciar Sesión</button>
            <button className="button buttons--landing" onClick={() => props.onSignUp()}>Registrarse</button>
        </div>
    )
}