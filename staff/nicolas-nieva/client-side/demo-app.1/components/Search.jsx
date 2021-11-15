// function Search (props) {
//     return <form className="home__search container" onSubmit ={ event =>{
//     event.preventDefault()

//     const query = event.target.query.value // DOM API

//     props.OnSearch (query)
// }}>
//     <input className="field" type="text" name="query" id="query" placeholder="Seach Criteria"/>
//     <button type="submit" className="button button--medium button--dark">Search</button>
// </form>
// }
function Search(props) {
    logger.info ('Search -> render')
    
    return <form className="home__search container" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value // DOM API

        props.onSearch(query)
    }}>
        <input className="field" type="text" name="query" id="query" placeholder="Search Criteria"/>
        <button type="submit" className="button button--medium button--dark">Search</button>
    </form>
}