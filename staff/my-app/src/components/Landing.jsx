function Landing({ onSignIn, onSignUp }) {
    return (
        <div className="landing container container--vertical container--gapped">
            <button type="button" className="button button--medium button--dark" onClick={() => onSignIn()}>Sign in</button>
            <button type="button" className="button button--medium" onClick={() => onSignUp()}>Sign up</button>
        </div>
    )
}

export default Landing