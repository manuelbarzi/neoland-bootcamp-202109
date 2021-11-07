import React from "react"

class Details extends React.Component {
    render() {
        return <>
            <div className="home__detail container container--vertical ">
                <h2>{this.props.item.name}</h2>
                <button className="button button-medium button" onClick={()=>this.props.onBack()}>Back</button>
                <button className="button button-medium button" onClick={() => this.props.favSelect(this.props.item)}>❤️</button>
                <img className="home__detail-image" src={this.props.item.image} alt="" />
                <p>{this.props.item.description}</p>
                <time>{this.props.item.year}</time>
                <span>{this.props.item.price}</span>
                <span>{this.props.item.color}</span>
                <span>{this.props.item.style}</span>
                <span>{this.props.item.collection}</span>
                <span>{this.props.item.maker}</span>
                <a href={this.props.item.url} target='_blank' rel="noreferrer">original</a>
            </div>
        </>
    }
}

export default Details
