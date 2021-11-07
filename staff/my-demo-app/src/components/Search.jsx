function Search({ onSubmitSearch }) {
    return <>
        <form className="home__search container" onSubmit={event => {
            event.preventDefault()
            const query = event.target.query.value
            onSubmitSearch(query)
        }}>
            <input className="field" type="text" name="query" id="query" placeholder="criteria" />
            <button type="submit" className="button button--medium button--dark">Search</button>
        </form>
    </>
}

export default Search