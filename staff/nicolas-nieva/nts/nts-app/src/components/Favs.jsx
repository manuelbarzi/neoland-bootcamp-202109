import Results from "./Results";

function Favs ({onGoback, items, onVehicle, onToggleFav}) {
    return<>
    <button className='button'onClick={() => {onGoback()}}>Go Back</button>
       
        <Results items={items} onVehicle={onVehicle} onToggleFav ={onToggleFav}/>

    </>
}

export default Favs