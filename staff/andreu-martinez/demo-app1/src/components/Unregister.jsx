const Unregister = props => {

    return <React.Fragment>
        <div className="unregister container container--gapped">
            <form className="container container--vertical">
                <input className="field" type="password" name="password" id="password" placeholder="password"/>
                <div>
                <button className ="button button--medium">Go Back</button>
                <button className ="button button--dark button--medium">Unregister</button>
                </div>
            </form>
        </div>
    </React.Fragment>
}