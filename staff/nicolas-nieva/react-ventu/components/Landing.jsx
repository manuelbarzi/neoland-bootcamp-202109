function Landing(props) {
    return (
        <div className="landing container container--vertical container--gapped">
            <button className="button button--medium button--dark" onClick={() => props.onSignin()}>Sign in</button>
            <button className="button button--medium" onClick={() => props.onSignup()}>Sign up</button>
        </div>
    )

}