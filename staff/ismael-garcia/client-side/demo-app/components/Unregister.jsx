function Unregister() {
    logger.info('Unregister -> render')

    return <div className="unregister container container--vertical container--gapped">
        <form className="container container--vertical">
            <input className="field" type="password" name="password" id="unregister-password" placeholder="Password" />

            <div className="container">
                <button type="button" className="button button--medium">Go Back</button>
                <button type="submit" className="button button--medium button--warning">Unregister</button>
            </div>
        </form>
    </div>
}