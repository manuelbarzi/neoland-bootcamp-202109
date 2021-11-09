import { useState} from "react"
function Favs() {
    const[showFavs,setshowFavs]=useState(false)

    showFavs = () => {
        if (showFavs === false) {
            setshowFavs(true)
        } else {
            setshowFavs(false)
        }
    }
    return <div>
    <button className="button button-medium button" onClick={showFavs} >❤️</button>
    {setshowFavs ?
        <div>
            <ul className="home__results container container--vertical ">
                {this.props.fav.map((f) => {
                    return <li key={f.id}>
                        <img src={f.image} width="200px" alt='Product'/>{f.name}
                    </li>
                })}
            </ul>
        </div> : <></>}
    </div>

}
export default Favs