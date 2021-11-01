function PostSignUp (props) {
    return <div className="registered container container--gapped container--vertical">
        <h1>¡Gracias por registrarte, y bienvenido! Puedes pasar al Sign in.</h1>
        <button className="button button--medium button--dark" onClick={() => props.onSignIn()}>Sign in</button>
    </div>
}