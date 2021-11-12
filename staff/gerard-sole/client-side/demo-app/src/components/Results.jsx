function Results({items, onItem, onToggleFav}) {
   return items.length ? 
    <> {items.map(item => <div className="container container--vertical" onClick = {() => onItem (item.id)}>
        <h1>{item.name}</h1>
        <button className="button button--dark" onClick= {event => {
        event.stopPropagation()
        onToggleFav(item.id)}}>{item.isFav? '❤️' : '🤍'}</button>
        <img src={item.thumbnail || item.image} />
        <span>{item.price} $</span>

    </div>)}
    </>
    : null
}
export default Results