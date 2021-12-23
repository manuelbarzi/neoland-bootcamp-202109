import 'bootstrap/dist/css/bootstrap.css'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import deleteReservation from '../logic/delete-reservation'
import { useContext } from 'react'
import AppContext from './AppContext'


function DeleteReservation ({goToHome}) {
    const { onFlowStart, onFlowEnd, onModal} = useContext(AppContext)


    const { id } = useParams()

    return <>
        <Card.Title className="container container--vertical">Cancelar Reserva</Card.Title>
        <div className="container container--vertical">
        <Button onClick={() => goToHome()}><i class="far fa-arrow-alt-circle-left"></i></Button>
        </div>
        <div className="container container--vertical">
        <Button variant='danger' onClick={async () => {
        try {
            onFlowStart()

            await deleteReservation(sessionStorage.token, id)

            onModal('Reserva cancelada')

            goToHome()

            onFlowEnd()
          } catch ({ message }) {
            onFlowEnd()

            onModal(message)
          }
        }}>Borrar Reserva</Button></div> 
    </>
}

export default DeleteReservation