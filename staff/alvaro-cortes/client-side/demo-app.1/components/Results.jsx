function Results(props) {
    logger.info("Results -> render")
    return props.items.length ?
        <div className="welcome__results container container--vertical">
            <ul className="welcome__results">
                {
                    props.items.map(item => <li  key={item.id} onClick={() => props.onItem(item.id)}>
                        <h2>{item.name}</h2>
                        <img src={item.thumbnail} />
                        <span>{item.price}</span>
                    </li>)
                }
            </ul>
        </div>
        :
        null
}