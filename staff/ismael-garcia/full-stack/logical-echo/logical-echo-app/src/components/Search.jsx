import logger from '../utils/logger'

function Search({ onSearch, query }) {
    logger.debug('Search -> render')

    return <div>
        <form className="container" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value // DOM API

            onSearch(query)
        }}>
            <input className="field" type="text" placeholder="criteria" name="query" defaultValue={query} />
            <button type="submit" className="button button--medium button--dark">Search</button>
        
        </form>
    </div>
}

export default Search