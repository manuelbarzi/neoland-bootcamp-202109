function Results(props) {
   return props.items.length ? 
    <> {props.items.map(item => <div className="container container--vertical" onClick = {() => props.onItem (item.id)}>
        <h1>{item.name}</h1>
        <img src={item.thumbnail} />
        <span>{item.price} $</span>

    </div> )}
    </>
    : null
}
export default Results