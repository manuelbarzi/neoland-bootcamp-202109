import React from "react";

class Favs extends React.Component {
    constructor(){
        super()

        this.state={showFavs:false}

    }
    showFavs = () => {
        if (this.state.showFavs === false) {
            this.setState({ showFavs: true })
        } else {
            this.setState({ showFavs: false })
        }

    }
    render() {
        return <>
            <button className="button button-medium button" onClick={this.showFavs} >❤️</button>
            {this.state.showFavs ?
                <div>

                    <ul className="home__results container container--vertical ">
                        {this.props.fav.map((f) => {
                            return <li key={f.id}>
                                <img src={f.image} width="200px" alt='Product'/>{f.name}
                            </li>
                        })}
                    </ul>
                </div> : <></>}
        </>
    }

}
export default Favs