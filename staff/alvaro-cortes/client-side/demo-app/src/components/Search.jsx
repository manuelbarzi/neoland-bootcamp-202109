import React from 'react';
import logger from '../logger'
import { FaStore } from "react-icons/fa";
import { FaHeart} from "react-icons/fa";

function Search({ onSearch, itemsF, itemsC, goToCart }) {
    logger.info("Search -> render")
    return <form className="welcome__search container container--search" onSubmit={event => {
        event.preventDefault()
        const query = event.target.query.value

        onSearch(query)
        event.target.reset()
    }}>
        <input type="text" placeholder="Escribe aquí" name="query" />
        <button className="button button--red">Buscar</button>
        <div className="container--search--heart">
        <span className="cart"> <FaStore onClick={() => goToCart()}/>{itemsC.length}</span> <span> <FaHeart /> {itemsF.length}</span> 
        </div>
    </form>
}

export default Search