import logger from '../utils/logger'

function PostSignUp ({ onSignIn }) {
    logger.info('PostSignUp -> render')

    return <div className="registered container container--gapped container--vertical">
        <h1>¡Gracias por registrarte, y bienvenido! Puedes pasar al Sign in.</h1>
        <button className="button button--medium button--dark" onClick={() => onSignIn()}>Sign in</button>
    </div>
}

export default PostSignUp