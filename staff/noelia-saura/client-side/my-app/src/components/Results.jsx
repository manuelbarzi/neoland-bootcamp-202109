function Results (items,onItem,){
    return <div>
    {items ?
            <ul className="home__results container container--vertical ">
                {items.map(
                    ({ id, name, thumbnail, price }) =>
                        <li className='home__result' key={id} onClick={() => onItem(id)} >
                            <h2>{name}</h2>
                            <img src={thumbnail} alt='Product' />
                            <span>{price}</span>
                        </li>)
                }
            </ul>   
            : 'Vacio' }
    </div>
}

export default Results