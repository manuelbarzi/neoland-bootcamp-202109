import React from "react";

class Results extends React.Component {
    render() {
        return <>
            {
                this.props.items ?
                    <ul className="home__results container container--vertical ">
                        {this.props.items.map(
                            ({ id, name, thumbnail, price }) =>
                                <li className='home__result' key={id} onClick={() => this.props.onItem(id)} >
                                    <h2>{name}</h2>
                                    <img src={thumbnail} alt='Product' />
                                    <span>{price}</span>
                                </li>)
                        }
                    </ul>   
                    : 'Vacio'
            }
        </>
    }
}
export default Results