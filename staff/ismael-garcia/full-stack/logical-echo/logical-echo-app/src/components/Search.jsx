import logger from '../utils/logger'
import { Outlet } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function Search({ onSearch, query }) {
    logger.debug('Search -> render')

    return <>
        <form className="container" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value // DOM API

            onSearch(query)
        }}>
            <TextField id="standard-search" label="Search field" type="search" variant="standard" className="field" name="query" placeholder="Search Criteria" defaultValue={query} />
            <Button type="submit" className="button button--medium button--dark">Search</Button>
        
        </form>

        <Outlet />
    </>
}

export default Search