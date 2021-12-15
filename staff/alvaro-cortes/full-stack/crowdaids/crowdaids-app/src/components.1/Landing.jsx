import React from 'react';
import logger from '../logger'
import Logo from './Logo'

function Landing({ onSignIn, onSignUp }) {
    logger.info("Landing -> render")
    return (
        <div className="landing container container--vertical">
            <Logo image="https://images.vexels.com/media/users/3/137424/isolated/preview/19b872cc66b8bfc0fb8d947e8728f183-yelp-icon-logo.png" text="Demo App" />
            <button className="button buttons--landing" onClick={onSignIn}>Iniciar Sesión</button>
            <button className="button buttons--landing" onClick={onSignUp}>Registrarse</button>
        </div>
    )
}

export default Landing