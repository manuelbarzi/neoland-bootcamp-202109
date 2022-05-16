import logger from '../utils/logger'
import { useQueryParams } from '../hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'

function Search() {
    logger.debug('Search -> render')

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))

    const navigate = useNavigate()

    const search = query => {
        setQuery(query)

        navigate(`/items?q=${query}`)
    }

    const goToStore = store => navigate(`/items?q=${store}`)

    return <form className="form container--vertical fade-in" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value 

            search(query)
        }}>
            <input className="field" type="text" placeholder="Search criteria" name="query" defaultValue={query} />
            <button type="submit" className="button button--medium clickable">Search</button>
            
            <div className='container container--gapped'>
                <button type='button' className="button button--medium clickable" onClick={() => goToStore('Zara')}>Zara</button>

                <button type='button' className="button button--medium clickable" onClick={() => goToStore('HM')}>H&M</button>

                <button type='button' className="button button--medium clickable" onClick={() => goToStore('Mango')}>Mango</button>
            </div>
        </form>
}

export default Search