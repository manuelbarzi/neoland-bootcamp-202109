function Search(props) {
    return <> 
        <form className="home__search container" onSubmit = {(event) => {
            event.preventDefault()

            const query = event.target.query.value 

            props.onSearch(query)
                
        }}>
            <input className="field" type="text" name="query" id="query" placeholder="criteria" />
            <button className="button button--medium button--dark">Search</button>
        </form>
    </>

}

export default Search