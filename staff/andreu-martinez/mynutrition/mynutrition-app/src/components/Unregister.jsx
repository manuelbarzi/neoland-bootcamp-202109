function Unregister({ onUnregister, onBack }) {
    //logger.debug('Unregister -> render')

    return <div className="unregister container container--vertical">
        <form className="container container--vertical" onSubmit={event => {
            event.preventDefault()
            const { target: { password: { value: password } } } = event
            onUnregister(password)
        }}>
            <input className="field" type="password" name="password" id="password" placeholder="password" />

            <div className="container">
                <button className="button" onClick={event => {onBack()}}>Go back</button>
                <button className="button">Unregister</button>
            </div>
        </form>
    </div>
}

export default Unregister