import logger from '../utils/logger'

function Landing({ onSignIn, onSignUp }) {
    logger.debug('Landing -> render')
    
    return <div className="landing container container--gapped">
        <button className="button button--medium button--dark" onClick={() => {
            logger.debug('calling sign in')
            onSignIn()
            }}>Sign In</button>
        <button className="button button--medium" onClick={() => onSignUp()}>Sign Up</button>
    </div>
}

export default Landing