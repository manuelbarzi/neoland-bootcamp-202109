function Favourites() {
    return <>
        <button className="button button--medium" onClick={event => {
            event.preventDefault()

           goHome
        }}>Go back</button>
    </>
}