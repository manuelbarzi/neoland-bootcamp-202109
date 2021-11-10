import './ResultDetails.css'

function ResultDetails({ detail, onBack }) {
    return (
        <div className="vehicleDetails">
            <button className="btn--back" onClick={() => onBack()}>↩</button>
            <h2 className="vehicleDetails__title">{detail.name}</h2>
            <img className="vehicleDetails__img" src={detail.image} alt="" />
            <p className="vehicleDetails__description">{detail.description}</p>
            <div class="vehicleDetails__lists">
                <ul class="list1">
                    <li class="list__item"><time>{detail.year}</time></li>
                    <li class="list__item">{detail.price} $</li>
                    <li class="list__item"><span>{detail.color}</span></li>
                </ul>
                <ul class="list2">
                    <li class="list__item"><span>{detail.style}</span></li>
                    <li class="list__item"><span>{detail.collection}</span></li>
                    <li class="list__item"><span>{detail.maker}</span></li>
                </ul>
            </div>
            <a href={detail.url}>Web</a>
        </div>
    )
}

export default ResultDetails