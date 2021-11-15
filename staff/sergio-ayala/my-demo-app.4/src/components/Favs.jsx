import Results from "./Results";

function Favs({ items, onItem, OnClickFav, OnBackHome, name }) {
    return <div className="pagelayout">
        <div className="title layout__title">
            <h1>YOUR FAVS</h1>
        </div>
        <div className="layout__subtitle">
            <p><strong className="name">{name ? name : 'Name'}</strong> here you can see your favorite cars
            </p>
        </div>
        <Results
            items={items}
            onItem={onItem}
            OnClickFav={OnClickFav}
        ></Results>
        <div className="layout__buttons--home-low layout__buttons">
            <button className='button' type='button' onClick={() => OnBackHome()}>BACK HOME</button>
        </div>
    </div>
}
        export default Favs