function Search({onSearch, query}) {

    return <form className="layout__buttons" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value

        onSearch(query)
    }}>
    <input type="text" id='query' className="input" name="query" placeholder="Car Query" defaultValue={query}></input>
    <button className='button' type="submit">SEARCH</button>
    </form>
    
}

export default Search