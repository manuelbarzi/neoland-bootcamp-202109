function Results({items, onItem, OnClickFav}) {
    return items.length ?
    <div className="home__results-list">
        {
            items.map(item => <div className='home__result' onClick={()=> onItem(item.id)}>
                <h2 className='home__result-title'>{item.name}</h2>
                <img className='home__result-img' src={item.thumbnail || item.image} ></img>
                <span className='home__result-price'>{item.price} $</span>
                <button className='button-fav' onClick={ event => {
                    event.stopPropagation()

                    OnClickFav(item.id)
                }}>{item.isFav ? '🧡' : '🤍'}</button>
            </div>)
        }
    </div>
    :
    null
}

export default Results
