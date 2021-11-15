import Results from './Results'

function Favs({ items, onItem, onToggleFav }) {

    return items.length ?
        <div className="test">
            <Results items={items} onItem={onItem} onToggleFav={onToggleFav} />
        </div>
        : <p>No favorites to show</p>
}

export default Favs