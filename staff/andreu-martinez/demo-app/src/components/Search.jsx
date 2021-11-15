function Search({onSearch, query}){
    return <>
        <form className="home__search test" onSubmit={event =>{
            event.preventDefault()

            const query = event.target.query.value

            onSearch(query)
        }}>
            <input className="field" type="text" placeholde="criteria" autoComplete="off" name="query" defaultValue={query} />
            
        </form>
    </>
}

export default Search