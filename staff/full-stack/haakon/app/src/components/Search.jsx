import React from "react"
import { searchGames } from "../logic"

const Search = ({ setView, setGames, setQuery, query }) => {
    return <>
        <form className='header__search' onSubmit={async event => {
            event.preventDefault()
            try {
                const query = event.target.query.value
                const games = await searchGames(query)
                setView('game')
                setGames(games)
            } catch ({ message }) {
                console.log(message);
            }
        }}>
            <input className="input-elevated" type="text" name='query' placeholder="Search" defaultValue={query} onChange={event => {
                const value = event.target.value
                setQuery(value)
            }} />
            <input type="submit" />
        </form>
    </>
}

export default Search