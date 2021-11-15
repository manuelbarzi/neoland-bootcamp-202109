function PostSignUp (props) {
    return <div className="registered container container--gapped container--vertical">
        <h1>Thanks for register! You can go to Sign In.</h1>
        <button className="button button--medium button--dark" onClick={() => props.onSignIn()}></button>
    </div>
}