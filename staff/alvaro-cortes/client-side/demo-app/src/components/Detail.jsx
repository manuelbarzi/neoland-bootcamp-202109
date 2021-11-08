import './Home.css'
import logger from '../logger'
import React, { Component }  from 'react';

class Detail extends Component {
    constructor(props) {
        super()

        this.state = { fav: props.item.isFav }
    }

    toggleFavorite = id => {
        this.setState({ fav: !this.state.fav})

        this.props.onToggleFavorite(id)
    }

    render() {
        logger.info('Detail -> render')

        const {
            props: {
                item: {
                    id,
                    name,
                    image,
                    description,
                    year,
                    price,
                    color,
                    style,
                    collection,
                    maker ,
                    url
                },
                backResultList
            }, 
            state: {
                fav
            },
            toggleFavorite
        } = this
    
    return <div className="welcome__details container container--vertical">
        <button className="button" onClick={backResultList}> Volver atrás</button>
        <span onClick={() => toggleFavorite(id)}>{fav ?'❤️' : '🤍'}</span>
        <h2>{name}</h2>
        <img src={image} alt="" width="300px" />
        <p>{description}</p>
        <time>{year}</time>
        <span>{price}</span>
        <span>{color}</span>
        <span>{style}</span>
        <span>{collection}</span>
        <span>{maker}</span>
        <a href={url}>Original</a>
    </div>
    }
}

export default Detail