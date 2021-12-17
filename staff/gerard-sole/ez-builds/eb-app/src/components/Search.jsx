function Search({onSearch, onGoFavs, onGoToCart}) {
    return <> 
        <form className="home__search container" onSubmit = {(event) => {
            event.preventDefault()

            const query = event.target.query.value 

            onSearch(query)
        }}>
            <input className="field" type="text" name="query" id="query" placeholder="criteria" />
            <button className="button button--dark">Search</button>
        </form>
    </>
}

export default Search