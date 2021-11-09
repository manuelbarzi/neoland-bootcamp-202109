//este Home es funcional y con hooks
import { useState,useEffect} from "react"
import {
    retrieveVehicle,
    updateUserPassword,
    searchVehicles
}
    from "../logic"
import Profile from "./Profile"
import Search from "./Search"
import Details from "./Details"
import Results from "./Results"
import Favs from "./Favs"

function Home({ name, goToSignOut }) {
    
    const [view, setView] = useState('home')
    const [vehicle, setVehicle] = useState(null)
    const [vehicles, setVehicles] = useState([])
    const [fav, setFav] = useState([])
    
    useEffect(()=>{
        if (sessionStorage.fav) {
            setFav(JSON.parse(sessionStorage.fav)) //parse: transforma de nuevo el string en array
        }
    },[]) 
   
    
    const goToProfile = () => setView('profile')
    const goBack = () => setView('home')
    const updatePassword = (oldPassword, password) => {
        updateUserPassword(sessionStorage.token, oldPassword, password, error => {
            if (error) {
                alert(error.message)
                return error
            }
            alert('password is updated')
            setView('home')
        })
    }
    const onSearch=(query)=>{
        setVehicle(null)
        setVehicles([])
            try {
                searchVehicles(query, (error, vehicles) => {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    setVehicle(vehicle)
                    setView('search')
                
                })
            } catch (error) {
                alert(error.message)
            }
    }
    const goToItem = (vehicleId)=>{
        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {
    
                if (error) {
                    alert(error.message)
                    return
                }
                setVehicle(vehicle)
                
            })
        } catch (error) {
            alert(error.message)
        }
    }
    const addFavVehicle=(vehicle)=>{
        let arrayFavs=setFav(fav)
        arrayFavs.push(vehicle)
        setFav(arrayFavs)
        sessionStorage.fav =JSON.stringify(arrayFavs)//stringify : covierte el array en forma de string
    }
    const clearVehicle = ()=>setVehicle(null)
    const goToSearch = ()=>{setView('search')}
    const goToLanding = ()=>{goToLanding()}

    return <div className="home container container--gapped container--vertical "  >
    <div className="container">
        <p>Hello, <span className="name">{name}</span>!</p>
        <button className="button button-medium button--dark" onClick={goToProfile} >Profile</button>
        <button className="button button-medium button" onClick={goToSignOut}>Sign out</button>
    </div>
    {(view === 'home' || view === 'search') && <Favs fav={fav} />}

    {view === 'profile' && <Profile goToHome={goBack} onPasswordUpdate={updatePassword} goToLanding={goToLanding} />}

    {view === 'home' || view === 'search' ? <Search goToSearch={goToSearch} onSearch={onSearch} /> : <></>}

    {view === 'search' && <>
        {vehicles && !vehicle && <Results items={vehicles} onItem={goToItem} />}
        {vehicle && <Details item={vehicle} onBack={clearVehicle} favSelect={addFavVehicle} />}
    </>}

</div>
}


export default Home