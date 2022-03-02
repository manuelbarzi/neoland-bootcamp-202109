import NavBar from "../components/NavBar"
import Reservations from "../components/Reservations"
import { Routes, Route, useNavigate } from 'react-router-dom'
import Profile from "../components/Profile"
import { useState, useEffect, useContext } from 'react'
import { retrieveUser } from './../logic'
import AppContext from './../components/AppContext';
import NewReservation from "../components/NewReservation"
import ReservationDetail from "../components/ReservationDetail"


function Home({ goToHome }) {
    const { showModalFeedback, showLoading, hideLoading, onSignOut } = useContext(AppContext);
    
    
    const [newReservation, setNewReservation] = useState(false);
    const handleCloseNewReservation = () => setNewReservation(false);
    const handleShowNewReservation = () => setNewReservation(true);

    const [username, setUsername] = useState(null)


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const { token } = sessionStorage
        if (token) {
            try {
                showLoading()

                const user = await retrieveUser(token)

                const { username } = user

                setUsername(username)
                hideLoading()

            } catch ({ message }) {
                hideLoading()
                showModalFeedback('Error', message, 'danger')
                onSignOut()


            }
        }
    }, [])

    return <>
        <NavBar username={username} handleShowNewReservation={handleShowNewReservation}  />
        <NewReservation handleCloseNewReservation={handleCloseNewReservation} newReservation={newReservation} />
        <Routes>
           
            <Route path='/' element={<Reservations />} />
            
            <Route path='reservation/:id' element={<ReservationDetail /> } />

            


        </Routes>
    </>
}

export default Home