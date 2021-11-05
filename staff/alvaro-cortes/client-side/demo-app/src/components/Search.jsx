import logger from '../logger'

function Search(props) {
    logger.info("Search -> render")
    return <form className="welcome__search container container--search" onSubmit={event => {
        event.preventDefault()
        const query = event.target.query.value

        props.onSearch(query)
        event.target.reset()
    }}>
        <input type="text" placeholder="Escribe aquí" name="query" />
        <button className="button button--red">Buscar</button>
    </form>
}

export default Search