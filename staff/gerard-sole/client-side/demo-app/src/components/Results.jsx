function Results({items, onItem}) {
   return items.length ? 
    <> {items.map(item => <div className="container container--vertical" onClick = {() => onItem (item.id)}>
        <h1>{item.name}</h1>
        <img src={item.thumbnail} />
        <span>{item.price} $</span>

    </div> )}
    </>
    : null
}
export default Results