import logger from '../utils/logger'

import { Outlet } from 'react-router-dom'

function Search({ onSearch, query }) {
    logger.debug('Search -> render')

    return <>
    <form className="container" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value // DOM API

        onSearch(query)
    }}>
        <input className="field" type="text" name="query" id="query" placeholder="Search Criteria" defaultValue={query} />
        <button type="submit" className="button button--medium button--dark">Search</button>
    </form>

    <Outlet />
    </>
}

export default Search