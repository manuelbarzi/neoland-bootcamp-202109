import logger from '../utils/logger'

function Unregister({ onUnregister, onBack }) {
    logger.debug('Unregister -> render')

    return <div className="unregister container container--vertical">
        <form className="container container--vertical" onSubmit={event => {
            event.preventDefault()

            const password = event.target.password.value

            onUnregister(password)
        }}>
            <input className="field" type="password" name="password" id="unregister-password" placeholder="Password" />

            <div className="container">
                <button type="button" className="button button--medium clickable" onClick={(event) => {
                    event.preventDefault()
                    
                    onBack()
                }}>Go Back</button>
                <button type="submit" className="button button--medium button--emphasized clickable">Unregister</button>
            </div>
        </form>
    </div>
}

export default Unregister