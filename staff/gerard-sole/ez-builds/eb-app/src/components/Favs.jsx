import Results from "./Results"

function Favs( { goSearch, items, onItem, onToggleFav } ) {
    return <>
        <button className="button" onClick={() => goSearch()}>Go back</button>
        <Results
            items={items}
            onItem={onItem}
            onToggleFav={onToggleFav}
        ></Results>
    </>
}
export default Favs