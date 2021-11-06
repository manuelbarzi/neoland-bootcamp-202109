function Home({ myUserName, onSignOut }) {
    return (
        <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{myUserName}</span>!</p>
                <button type="button" className="button button-medium button--dark">Profile</button>
                <button type="button" className="button button-medium button" onClick={() => onSignOut()}>Sign out</button>
            </div>

            <form className="home__search container">
                <input className="field" type="text" name="query" id="query" placeholder="criteria" />
                <button type="submit" className="button button--medium button--dark">Search</button>
            </form>

            <ul className="home__results container container--vertical"></ul>
        </div>
    )
}

export default Home