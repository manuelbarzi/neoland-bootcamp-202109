import logger from '../logger'

function PostSignUp({ onSignIn }) {
    logger.debug('PostSignUp -> render')

    return <div className="container container--gapped container--vertical text--postsignup">
        Has sido registrado correctamente, puede disfrutar del diario haciendo click a continuación<button className="button button--dark button--medium" onClick={() => onSignIn()}>Sign
            in</button>
    </div>
}

export default PostSignUp