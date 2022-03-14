import React from 'react'
import { useQuery } from '../hooks'
import { useState, useEffect, useContext } from 'react'
import { searchReservations } from '../logic'
import AppContext from './AppContext'
import 'bootstrap/dist/css/bootstrap.css'
import { ListGroup } from 'react-bootstrap'

function Results({goToItem}) {

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

  const [reservations, setReservations] = useState({})

  const _query = useQuery()

  const query = _query.getParam ('q')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { token } = sessionStorage

    if (token) {
      try {
        onFlowStart()

        const reservations = await searchReservations(token, query)

        onFlowEnd()

        setReservations(reservations)

      } catch ({ message }) {
        onFlowEnd()

        onModal('No se encontraron reservas con ese nombre')
      }
    }
  }, [query])

  return reservations && reservations.length ? (
    <div className='reservations'>
      <ul className=''>
        {reservations.map(({ id, pax, quantity, from, until, state }) => (
          <ListGroup.Item
            className='list-reservation'
            key={id}
            onClick={() => goToItem(id)}
          >
            <span>Pasajero: {pax} </span>
            <span> x {quantity} </span>
            <span>In: {from.slice(0, 9)}</span>
            <span>Out: {until.slice(0, 9)} </span>
            <span>Estado: {state}</span>
          </ListGroup.Item>
        ))}
      </ul>
    </div>
  ) : 'No se encontraron reservas con este nombre'
}

export default Results
