import './Results.css'

function Results({ vehicles, onVehicle }) {
    return <>
        <ul className="vehicles">
            {
                vehicles.map(vehicle =>
                    <li className="vehicles__item" key={vehicle.id} onClick={() => onVehicle(vehicle.id)}>
                        <h1 className="vehicles__title"> {vehicle.name} </h1>
                        <img className="vehicles__img" src={vehicle.thumbnail} alt="" />
                        <p className="vehicles__price"> {vehicle.price} </p>
                    </li>
                )
            }
        </ul>
    </>
}

export default Results