import logger from '../utils/logger'
import { useQueryParams } from '../hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './Search.css';

function Search() {
    logger.debug('Search -> render')

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))

    const navigate = useNavigate()

    const search = query => {
        setQuery(query)

        navigate(`/items?q=${query}`)
    }

    return <div>
        <form className="container" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value 

            search(query)
        }}>
            <input className="field" type="text" placeholder="Search criteria" name="query" defaultValue={query} />
            <button type="submit" className="button button--medium button--emphasized clickable">Search</button>
        
        </form>
    </div>
}

export default Search