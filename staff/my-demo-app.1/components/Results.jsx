function Results(props) {
    return props.items.length ?
    <div className="home__results-list">
        {
            props.items.map(item => <div className='home__result' onClick={()=> props.onItem(item.id)}>
                <h2 className='home__result-title'>{item.name}</h2>
                <img className='home__result-img' src={item.thumbnail} ></img>
                <span className='home__result-price'>{item.price} $</span>
            </div>)
        }
    </div>
    :
    null
}


