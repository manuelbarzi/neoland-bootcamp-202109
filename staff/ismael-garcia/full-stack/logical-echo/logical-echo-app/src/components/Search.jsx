import logger from '../utils/logger'
import { Outlet } from 'react-router-dom'

function Search({ onSearch, onStore, query }) {
    logger.debug('Search -> render')

    return <>
        <form className="container" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value // DOM API

            onSearch(query)
        }}>
            <input className="field" type="text" name="query" id="query" placeholder="Search Criteria" defaultValue={query} />
            <button type="submit" className="button button--medium button--dark">Search</button>
            <button type="button" className="button button--medium button--dark" onClick={event => {
                event.preventDefault()

                onStore('Zara')
            }}>Zara</button>
            <button type="button" className="button button--medium button--dark">H&M</button>
            <button type="button" className="button button--medium button--dark">Mango</button>
        </form>

        <Outlet />
    </>
}

export default Search