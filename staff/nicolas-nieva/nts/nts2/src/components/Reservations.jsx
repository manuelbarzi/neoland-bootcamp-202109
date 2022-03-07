import { useState, useEffect, useContext } from 'react';
import AppContext from './AppContext';
import { retrieveReservations } from '../logic'
import 'bootstrap/dist/css/bootstrap.css'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'

function Reservations() {
  const { showModalFeedback, showLoading, hideLoading } = useContext(AppContext);
  const [reservations, setReservations] = useState([]);

  const navigate = useNavigate()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { token } = sessionStorage;

    try {
      showLoading()
      const reservations = await retrieveReservations(token);
      hideLoading()
      setReservations(reservations);


    } catch ({ message }) {
      hideLoading()
      showModalFeedback('Error Carga', message, 'danger')
    }
  }, []);

  const goToItem = (id) => {
    navigate(`/reservations/${id}`)
  }

  return reservations && reservations.length ?
    <>
      <ListGroup horizontal>
        {reservations.map(({ id, pax, quantity, from, until, state }) => (
          <ListGroup.Item onClick={() => goToItem(id)} className='' key={id} >
            <ListGroup.Item variant="info">Pasajero: {pax} x {quantity} </ListGroup.Item>
            <ListGroup.Item variant="info">In: {from.slice(0, 9)}</ListGroup.Item>
            <ListGroup.Item variant="info">Out: {until.slice(0, 9)} </ListGroup.Item>
            <ListGroup.Item variant="info">Estado: {state}</ListGroup.Item>
          </ListGroup.Item>
        ))
        }
      </ListGroup>
    </>
    :
    <h3>No hay reservas disponibles</h3>
}

export default Reservations
