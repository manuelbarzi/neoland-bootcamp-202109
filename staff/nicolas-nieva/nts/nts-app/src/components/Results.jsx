function Results({ items, onVehicle, onToggleFav }) {
    return <>
        <div >
            <ul className="gridi">
                {
                    items.map(({id, image, name, thumbnail, price, isFav}) =>
                        <li key={id} onClick={() => onVehicle(id)}>
                            <h3> {name} </h3>
                            <button className="button" onClick={event => {
                                event.stopPropagation ()
                                onToggleFav (id)
                            }}>{isFav ? '💜' : '🤍'}</button>
                            <img alt='hotwheels' width='300px' src={thumbnail || image} />
                            <p> $ {price} </p>
                        </li>
                    )
                }
            </ul>
        </div>
    </>
}
    


export default Results