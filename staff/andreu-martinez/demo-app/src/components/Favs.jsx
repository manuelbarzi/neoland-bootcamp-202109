import Results from './Results'

function Favs({ items, onBack, onItem, onToggleFav }) {

    return <>
        <button className="button" onClick={event => {
            event.preventDefault()

            onBack()
        }}>Go back</button>

        <Results items={items} onItem={onItem} onToggleFav={onToggleFav} />
    </>
}

export default Favs