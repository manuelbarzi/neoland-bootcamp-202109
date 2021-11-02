function Landing(props) {
    logger.info('Landing -> render')
    
    return <div className="landing container container--gapped">
        <button className="button button--medium button--dark" onClick={() => props.onSignIn()}>Sign In</button>
        <button className="button button--medium" onClick={() => props.onSignUp()}>Sign Up</button>
    </div>
}