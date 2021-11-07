function Results({ vehicles, onVehicle }) {
    return <>
        <div className="container">
            <ul>
                {
                    vehicles.map(vehicle =>
                        <li key={vehicle.id} onClick={() => onVehicle(vehicle.id)}>
                            <h1> {vehicle.name} </h1>
                            <img src={vehicle.thumbnail} alt="" />
                            <p> {vehicle.price} </p>
                        </li>
                    )
                }
            </ul>
        </div>
    </>
}

export default Results