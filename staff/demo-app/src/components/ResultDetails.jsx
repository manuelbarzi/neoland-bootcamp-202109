import './ResultDetails.css'

function ResultDetails({ detail, onBack }) {
    return (
        <div className="vehicleDetails">
            <button className="btn--back" onClick={() => onBack()}>↩</button>
            <h2 className="vehicleDetails__title">{detail.name}</h2>
            <img className="vehicleDetails__img" src={detail.image} alt="" />
            <p className="vehicleDetails__description">{detail.description}</p>
            <div className="vehicleDetails__lists">
                <ul className="list1">
                    <li className="list__item"><time>{detail.year}</time></li>
                    <li className="list__item">{detail.price} $</li>
                    <li className="list__item"><span>{detail.color}</span></li>
                </ul>
                <ul className="list2">
                    <li className="list__item"><span>{detail.style}</span></li>
                    <li className="list__item"><span>{detail.collection}</span></li>
                    <li className="list__item"><span>{detail.maker}</span></li>
                </ul>
            </div>
            <a href={detail.url}>Web</a>
        </div>
    )
}

export default ResultDetails