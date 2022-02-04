import logger from '../logger'

function Landing({ onSignIn, onSignUp }) {
    logger.debug('Landing -> render')
    return <div className="container container--vertical ">
        <button className="button button--medium button--dark container--gapped" onClick={() => {
            onSignIn()
        }}>Sign in</button>
        <button className="button button--medium" onClick={onSignUp}>Sign up</button>
        <div className='landing--footer'>
        <p className='text--footer'>In my Mind trabaja para tener un control diario de una persona que sufre algun trastorno asociado al estres, ansiedad, depresión...</p>
        <p className='text--footer'>La finalidad es ser consciente de ti mismo y poder compartirlo con tu professional
        </p>
        </div>
        
    </div>
    
}

export default Landing