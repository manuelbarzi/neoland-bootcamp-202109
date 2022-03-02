import { useState, useEffect, useContext } from 'react'
import AppContext from './AppContext'
import { retrieveReservation } from './../logic'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, ListGroup } from 'react-bootstrap'


function ReservationDetail() {

    const [reservation, setReservation] = useState({})
    
    const { showModalFeedback, showLoading, hideLoading } = useContext(AppContext);

    const { id } = useParams()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const { token } = sessionStorage
    
        try {
          showLoading()
    
          const reservation = await retrieveReservation(token, id)
    
          setReservation(reservation)
    
          hideLoading()
        } catch ({ message }) {
          hideLoading()
    
          showModalFeedback('Error',message, 'danger')
        }
      }, [])

    return <>
      <ListGroup>
        <ListGroup.Item variant='primary'>
          Pax: {reservation[0]?.pax} x {reservation[0]?.quantity}
        </ListGroup.Item>
        <ListGroup.Item variant='primary'>Producto: {reservation[0]?.product}</ListGroup.Item>
        <ListGroup.Item variant='primary'>In: {reservation[0]?.from}</ListGroup.Item>
        <ListGroup.Item variant='primary'>Out: {reservation[0]?.until}</ListGroup.Item>
        <ListGroup.Item variant='primary'>Estado: {reservation[0]?.state}</ListGroup.Item>
        <ListGroup.Item variant='primary'>Agente: {reservation[0]?.agent}</ListGroup.Item>
        <ListGroup.Item variant='primary'>
          <ListGroup className=''>
            {reservation[0]?.notes.map(({ text, date }) => (
              <ListGroup.Item variant='secondary'
                key={Math.random() * Math.random()} >
               Notas: {text} 
                {/* <span>{date.slice(0, 9)}</span> */}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
        <Button><i class="far fa-arrow-alt-circle-left"></i></Button>
        <Button className='button' >Modificar Reserva</Button>
        <Button >Cancelar Reserva</Button>
   
        <Button className='button'>Añadir Nota</Button>
      </ListGroup>
    </>
}

export default ReservationDetail