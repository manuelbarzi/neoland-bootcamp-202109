class Home extends React.Component {
    constructor() {
        super()


    }
    render() {
        return <div className="home container container--gapped container--vertical container--off">
            <div className="container">
                <p>Hello, <span className="name">{this.props.name ? this.props.name : 'World'}</span>!</p>
                <button className="button button-medium button--dark">Profile</button>
                <button className="button button-medium button" onClick={() => this.props.toLanding()}>Sign out</button>
            </div>

            <form className="home__search container">
                <input className="field" type="text" name="query" id="query" placeholder="criteria" />
                <button className="button button--medium button--dark">Search</button>
            </form>

            <ul className="home__results container container--vertical container--off"></ul>


        </div>
    }

}